import * as React from 'react';
import { getTestData } from '../../logic/functions/testFetch';
import Auth from '../../logic/functions/core/Auth';

interface CallbackProps {
    auth: Auth;
};

const Callback: React.FunctionComponent<CallbackProps> = ({ auth }) => {
    React.useEffect(() => {
        const callGetTest = async () => {
            let data = await getTestData();
            console.log(data);
            auth.handleAuthentication();
        };
        callGetTest();
    }, []);

    return (
        <h1>Loading</h1>
    );
};

export default Callback;