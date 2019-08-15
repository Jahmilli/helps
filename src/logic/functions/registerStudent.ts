import { post } from './core/fetch';
import { StudentDetails } from '../domains/studentDetails.domain';

const registerStudent = async (studentDetails: StudentDetails) => {
    return await post('/api/v1/student/register', studentDetails);
}

export default registerStudent;