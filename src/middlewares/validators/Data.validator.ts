import Ajv from 'ajv';
import isEmpty from 'lodash/isEmpty';

// Helpers
import { buildErrorObject } from './util';
import { ApiError } from '../../helpers/apiErrorHandler';

// Types
import { Request, Response, NextFunction } from 'express';

const ajv = new Ajv();
export const UpdateValidator = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (isEmpty(req.body)) return next(ApiError.emptyBody());
    const schema = {
        type: 'object',
        properties: {
            // only two options for branch: 'Delhi' or 'Mumbai'
            branch: { type: 'string', enum: ['Delhi', 'Mumbai'] },
            reporting_method: { type: 'string', enum: ['Phone', 'Email', 'Chat', 'In Person'] },
            category: { type: 'string', enum: ['Grievance', 'General'] },
            date: { type: 'string' },
            time: { type: 'string' },
            // depending on the category, sub_category can be one of the following
            sub_category: { type: 'string', enum: ['Complaints', 'Query', 'Others'] },
            priority: { type: 'string', enum: ['High', 'Medium', 'Low'] },
            nature: { type: 'string', enum: ['Health', 'Transport', 'Property'] },
            case_mgr: { type: 'string', enum: ['Daryl', 'Titus', 'Alfonzo'] },
            case_reporter: { type: 'string', enum: ['Tanner', 'Clinton'] },
            case_status: { type: 'string', enum: ['Not Prepared', 'Progress', 'Closed'] },
            unread: { type: 'boolean' }
        },

        additionalProperties: true, // for case_id
    };
    const validate = ajv.compile(schema);

    const valid = validate(req.body);

    if (valid) {
        next();
    } else {
        next(buildErrorObject(validate.errors));
    }
};


export const CreateValidator = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (isEmpty(req.body)) return next(ApiError.emptyBody());
    const schema = {
        type: 'object',
        properties: {
            // only two options for branch: 'Delhi' or 'Mumbai'
            branch: { type: 'string', enum: ['Delhi', 'Mumbai'] },
            reporting_method: { type: 'string', enum: ['Phone', 'Email', 'Chat', 'In Person'] },
            category: { type: 'string', enum: ['Grievance', 'General'] },
            date: { type: 'string' },
            time: { type: 'string' },
            // depending on the category, sub_category can be one of the following
            sub_category: { type: 'string', enum: ['Complaints', 'Query', 'Others'] },
            priority: { type: 'string', enum: ['High', 'Medium', 'Low'] },
            nature: { type: 'string', enum: ['Health', 'Transport', 'Property'] },
            case_mgr: { type: 'string', enum: ['Daryl', 'Titus', 'Alfonzo'] },
            case_reporter: { type: 'string', enum: ['Tanner', 'Clinton'] },
        },

        additionalProperties: false,
    };
    const validate = ajv.compile(schema);

    const valid = validate(req.body);

    if (valid) {
        next();
    } else {
        next(buildErrorObject(validate.errors));
    }
};
