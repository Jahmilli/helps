import * as React from 'react';
import StudentRegistrationForm from '../RegistrationForm';
import '../../pages/styles.css';

interface StudentRegistrationPageProps {
};

const StudentRegistrationContainer: React.FunctionComponent<StudentRegistrationPageProps> = () => {
    return (
        <StudentRegistrationForm />
    );
};
    

export default StudentRegistrationContainer;