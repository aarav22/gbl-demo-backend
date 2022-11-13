import { DataRepository, repository } from '../repositories/Data.repository';

// Helpers
import { sanitizeEntity } from '../helpers/sanitize';

// Types
import { DataCreateDto, DataUpdateDto, DataData } from '../@types/Data.types';

export class DataService {
    constructor(private readonly _repository: DataRepository) { }

    public getAll = async (): Promise<DataData> => {
        const data = await this._repository.find();
        return sanitizeEntity(data, 'data') as DataData;
    };

    public getAllNewUnread = async (): Promise<DataData> => {
        const data = await this._repository.findNewUnread();
        return sanitizeEntity(data, 'data') as DataData;
    };

    public getAllClosed = async (): Promise<DataData> => {
        const data = await this._repository.findClosed();
        return sanitizeEntity(data, 'data') as DataData;
    };

    public create = async (dto: DataCreateDto): Promise<DataData> => {
        const data = await this._repository.create(dto);
        return sanitizeEntity(data, 'data') as DataData;
    };

    public findOne = async (id: number): Promise<DataData> => {
        const data = await this._repository.findOne(id);
        return sanitizeEntity(data, 'data') as DataData;
    };

    public findOneAndUpdate = async (id: number, dto: DataUpdateDto): Promise<DataData> => {
        const data = await this._repository.findOneAndUpdate(id, dto);
        return sanitizeEntity(data, 'data') as DataData;
    };

    public findOneAndDelete = async (id: number): Promise<DataData> => {
        const data = await this._repository.delete(id);
        return sanitizeEntity(data, 'data') as DataData;
    }
}

export const service = new DataService(repository);
