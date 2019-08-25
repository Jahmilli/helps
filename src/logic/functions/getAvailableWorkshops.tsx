import { get } from './core/fetch';

export const getAvailableWorkshops = async (): Promise<any> => {
    return await get('/api/v1/workshop');
}