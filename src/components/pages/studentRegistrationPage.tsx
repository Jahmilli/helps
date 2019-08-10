import * as React from 'react';
import { getTestData } from '../../logic/functions/testFetch';
import Auth from '../../logic/functions/core/Auth';
import StudentRegistrationForm from '../containers/RegistrationForm';
import './styles.css';

interface StudentRegistrationPageProps {
    auth: any
};

const StudentRegistrationPage: React.FunctionComponent<StudentRegistrationPageProps> = ({auth}) => {
    React.useEffect(() => {
        const callGetTest = async () => {
            let data = await getTestData();
            console.log(data);
        };

        callGetTest();
    }, []);

    return (
        <div className="studentRegistrationPage">
            <StudentRegistrationForm auth={auth} />
        </div>
    );
};
    

export default StudentRegistrationPage;