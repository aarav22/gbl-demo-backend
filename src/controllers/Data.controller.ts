import { DataService, service } from '../services/Data.service';
import { ApiError } from '../helpers/apiErrorHandler';

// Types
import { DataCreateDto } from '../@types/Data.types';
import { Error } from '../@types/Error';
import { Request, Response, NextFunction } from 'express';

const message: Error = {
    message: 'Missing case_id',
    type: 'error',
};

export class DataController {
    constructor(private readonly _service: DataService) { }

    public getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { new_unread, closed } = req.query;
            var data;
            if (new_unread) {
                data = await this._service.getAllNewUnread();
            } else if (closed) {
                data = await this._service.getAllClosed();
            } else {
                data = await this._service.getAll();
            }
            res.status(200).send(data);
        } catch (err) {
            return next(err);
        }
    };

    public getOne = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { case_id } = req.query;
            if (!case_id) {
                return next(ApiError
                    .badRequest(
                        message
                    ))
            }
            const id = parseInt(case_id as string);
            const data = await this._service.findOne(id);
            res.status(200).send(data);
        } catch (err) {
            return next(err);
        }
    };

    public create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            // auto assign case_no
            // unread by default
            // case_status is Not Prepared by default
            const { branch, reporting_method, date, time, category, sub_category, priority, nature, case_mgr, case_reporter } = req.body;
            const dto: DataCreateDto = { branch, reporting_method, date, time, category, sub_category, priority, nature, case_mgr, case_reporter };
            const data = await this._service.create(dto);
            res.status(201).send(data);
        } catch (err) {
            return next(err);
        }
    };

    public update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            if (!req.user) return next(ApiError.forbidden());

            const { case_id } = req.body;
            const id = parseInt(case_id as string);
            if (!id) {
                return next(ApiError
                    .badRequest(
                        message
                    ))
            }
            const data = await this._service.findOneAndUpdate(id, req.body);
            res.status(200).send(data);
        } catch (err) {
            return next(err);
        }
    };

    public delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            if (!req.user) return next(ApiError.forbidden());

            const { case_id } = req.body;
            if (!case_id) {
                return next(ApiError
                    .badRequest(
                        message
                    ));
            }
            const id = parseInt(case_id as string);
            const data = await this._service.findOneAndDelete(id);
            res.status(200).send(data);
        } catch (err) {
            return next(err);
        }
    };
}

export const controller = new DataController(service);
