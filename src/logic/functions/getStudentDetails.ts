import { get } from './core/fetch';

const getStudentDetails = async (_id: string): Promise<any> => {
    return await get(`/api/v1/student/${_id}/details`);
}

export default getStudentDetails;