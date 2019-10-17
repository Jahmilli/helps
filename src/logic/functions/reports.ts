import { get } from './core/fetch';

export const getAllBookedSessions = async () => {
    return await get(`/api/v1/session/reports`);
}