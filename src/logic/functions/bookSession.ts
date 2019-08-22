import { post } from './core/fetch';
import { ICheckBox, Session } from '../domains/sessionDetails.domain';

const bookSession = async (sessionDetails: Session) => {
    return await post('/api/v1/session/book', JSON.stringify(sessionDetails));
}

export default bookSession;