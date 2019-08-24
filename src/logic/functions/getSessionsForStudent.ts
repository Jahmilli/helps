import { get } from './core/fetch';

const getSessionsForStudents = async (studentId: string): Promise<any> => {
    return await get(`/api/v1/student/${studentId}/sessions`);
}

export default getSessionsForStudents;