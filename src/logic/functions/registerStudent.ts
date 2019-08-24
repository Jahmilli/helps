import { post } from './core/fetch';
import { IStudentDetails } from '../domains/studentDetails.domain';

const registerStudent = async (studentDetails: IStudentDetails) => {
    return await post('/api/v1/student/register', JSON.stringify(studentDetails));
}

export default registerStudent;