import { ROLE } from './index';

export interface DataCreateDto {
    branch: string;
    reporting_method: string;
    date: string;
    time: string;
    category: string;
    sub_category: string;
    priority: string;
    nature: string;
    case_mgr: string;
    case_reporter: string;
}

export interface DataData {
    case_id: number;
    case_status: string;
    reporitng_method: string;
    date: string;
    time: string;
    category: string;
    sub_category: string;
    priority: string;
    nature: string;
    case_mgr: string;
    case_reporter: string;
    unread: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface DataUpdateDto {
    branch?: string;
    reporting_method?: string;
    category?: string;
    sub_category?: string;
    priority?: string;
    nature?: string;
    case_mgr?: string;
    case_reporter?: string;
    updated_at?: Date;
    case_status?: string;
    unread?: boolean;
}
