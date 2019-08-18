import { post } from './core/fetch';
import { Session } from '../domains/sessionDetails.domain';

export const createNewSessions = async (data: Array<Session>) => {
    return await post('/api/v1/session/create', JSON.stringify(data));
}