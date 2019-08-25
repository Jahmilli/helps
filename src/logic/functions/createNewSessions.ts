import { post } from './core/fetch';
import { ISession } from '../domains/sessionDetails.domain';

export const createNewSessions = async (data: Array<ISession>) => {
    return await post('/api/v1/session/create', JSON.stringify(data));
}