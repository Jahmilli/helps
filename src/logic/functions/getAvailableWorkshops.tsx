import { get } from './core/fetch';

export const getCurrentWorkshops = async (): Promise<any> => {
    return await get('/api/v1/workshop/current');
}

export const getArchivedWorkshops = async (): Promise<any> => {
    return await get('/api/v1/workshop/archived');
}