import * as React from 'react';
import { getTestData } from '../../logic/functions/testFetch';
import LoginForm from '../containers/LoginForm';
import './styles.css';

const LoginPage: React.FunctionComponent = () => {
    React.useEffect(() => {
        const callGetTest = async () => {
            let data = await getTestData();
            console.log(data);
        };

        callGetTest();
    }, []);

    return (
        <div className="loginPage">
            <h1>This is a login page</h1>
            <LoginForm />
        </div>
    );
};
    

export default LoginPage;
