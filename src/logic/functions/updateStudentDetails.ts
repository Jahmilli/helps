import { post } from './core/fetch';
import { IStudentDetails } from '../domains/studentDetails.domain';

const updateStudentDetails = async (studentDetails: IStudentDetails) => {
    return await post('/api/v1/student/update', JSON.stringify(studentDetails));
}

export default updateStudentDetails;