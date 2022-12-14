import { database as _db } from '../database/db';

// Types
import { DataCreateDto, DataUpdateDto, DataData, DataDataArray } from '../@types/Data.types';
export class DataRepository {
    public create = async (dto: DataCreateDto): Promise<DataData> => {
        // auto assign case_id
        // unread by default
        // case_status is Not Prepared by default
        const [data] = await _db('data').insert(dto).returning('*');
        return data as DataData;
    };

    public findOne = async (case_id: number): Promise<DataData> => {
        const [data] = await _db('data').where({ case_id });
        return data as DataData;
    };

    public find = async (): Promise<any> => {
        // return all data
        const data = await _db('data');
        return data;
    };

    public findNewUnread = async (): Promise<any> => {
        const data = await _db('data').where({ case_status: 'new' }).orWhere({ unread: true });
        return data;
    };

    public findClosed = async (): Promise<any> => {
        const data = await _db('data').where({ case_status: 'closed' });
        return data;
    };

    public findOneAndUpdate = async (case_id: number, body: DataUpdateDto): Promise<DataData> => {
        // add updated_at timestamp to body
        const new_body = { ...body, updated_at: new Date() };
        const [data] = await _db('data').where({ case_id }).update(new_body).returning('*');
        return data as DataData;
    };

    public delete = async (case_id: number): Promise<DataData> => {
        const [data] = await _db('data').where({ case_id }).del().returning('*');
        return data as DataData;
    };
}

export const repository = new DataRepository();
