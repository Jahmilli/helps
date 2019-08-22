import { post } from './core/fetch';
import { Session } from '../domains/sessionDetails.domain';

const bookSession = async (sessionDetails: Session) => {
    return await post('/api/v1/session/book', JSON.stringify(sessionDetails));
}

export default bookSession;