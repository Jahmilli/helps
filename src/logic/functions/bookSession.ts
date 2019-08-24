import { post } from './core/fetch';
import { ISession } from '../domains/sessionDetails.domain';

const bookSession = async (sessionDetails: ISession) => {
    return await post('/api/v1/session/book', JSON.stringify(sessionDetails));
}

export default bookSession;