import { get } from './core/fetch';

export const getTestData = async () => {
    return await get('/api/v1/test');
}