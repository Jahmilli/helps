import { get, post } from './core/fetch';

export interface ReportsPayload {
    startDate: Date;
    endDate: Date;
}

export const getAllBookedSessions = async (payload?: ReportsPayload) => {
    const queryParams = payload ? `?startDate=${payload.startDate}&endDate=${payload.endDate}` : '';
    return await get(`/api/v1/session${queryParams}`);
}