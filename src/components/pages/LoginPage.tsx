import * as React from 'react';
import { getTestData } from '../../logic/functions/testFetch';
import Auth from '../../logic/functions/core/Auth';
import LoginForm from '../containers/LoginForm';
import './styles.css';

interface LoginPageProps {
    auth: any;
}

const LoginPage: React.FunctionComponent<LoginPageProps> = ({auth}) => {
    React.useEffect(() => {
        const callGetTest = async () => {
            let data = await getTestData();
            // let authData = ();
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
