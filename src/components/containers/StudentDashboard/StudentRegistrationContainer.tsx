import * as React from 'react';
import StudentRegistrationForm from '../RegistrationForm';
import '../../pages/styles.css';
import Auth from '../../../logic/functions/core/Auth';

interface StudentRegistrationPageProps {
    auth: Auth;
};

const StudentRegistrationContainer: React.FunctionComponent<StudentRegistrationPageProps> = ({ auth }) => {
    return (
        <StudentRegistrationForm auth={auth} />
    );
};
    

export default StudentRegistrationContainer;