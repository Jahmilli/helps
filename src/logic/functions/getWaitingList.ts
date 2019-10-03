import { get } from './core/fetch';

export const getWaitingList = async (): Promise<any> => {
    return await get('/api/v1/session/waitingList');
}