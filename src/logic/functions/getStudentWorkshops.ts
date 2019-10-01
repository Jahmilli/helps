import { get } from './core/fetch';

const getStudentWorkshops = async (studentId: string): Promise<any> => {
    return await get(`/api/v1/student/${studentId}/workshops`);
}

export default getStudentWorkshops;