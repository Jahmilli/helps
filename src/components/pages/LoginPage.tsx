import * as React from 'react';
import { getTestData } from '../../logic/functions/testFetch';
import LoginForm from '../containers/LoginForm';
import './styles.css';
import Auth from '../../logic/functions/core/Auth';

interface LoginPageProps {
    auth: Auth;
}

const LoginPage: React.FunctionComponent<LoginPageProps> = ({auth}) => {
    React.useEffect(() => {
        const callGetTest = async () => {
            let data = await getTestData();
            console.log(data);
        };

        callGetTest();
    }, []);

    return (
        <div className="loginPage">
            <LoginForm auth={auth} />
        </div>
    );
};
    

export default LoginPage;
