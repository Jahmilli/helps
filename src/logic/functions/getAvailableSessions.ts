import { get } from './core/fetch';

export const getAvailableSessions = async (): Promise<any> => {
    return await get('/api/v1/session');
}