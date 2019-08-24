import { get } from './core/fetch';

// This returns all sessions for the student (This could probably be used for both admins/students)
const getSessionsForStudents = async (studentId: string): Promise<any> => {
    return await get(`/api/v1/session/student/${studentId}`);
}

export default getSessionsForStudents;