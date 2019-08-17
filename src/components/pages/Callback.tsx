import * as React from 'react';
import Auth from '../../logic/functions/core/Auth';

interface CallbackProps {
    auth: Auth;
};

const Callback: React.FunctionComponent<CallbackProps> = ({ auth }) => {
    React.useEffect(() => {
        const callGetTest = async () => {
            auth.handleAuthentication();
        };
        callGetTest();
    }, []);

    return (
        <h1>Loading</h1>
    );
};

export default Callback;