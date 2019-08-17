import * as React from 'react';
import StudentRegistrationForm from '../RegistrationForm';
import '../../pages/styles.css';
import Auth from '../../../logic/functions/core/Auth';

interface StudentRegistrationContainerProps {
    auth: Auth;
};

const StudentRegistrationContainer: React.FunctionComponent<StudentRegistrationContainerProps> = ({ auth }) => {
    return (
        <StudentRegistrationForm auth={auth} />
    );
};
    

export default StudentRegistrationContainer;