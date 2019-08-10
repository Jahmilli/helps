import * as React from 'react';
import { getTestData } from '../../logic/functions/testFetch';
import Auth from '../../logic/functions/core/Auth';

const HomePage: React.FunctionComponent = () => {
    React.useEffect(() => {
        const callGetTest = async () => {
            let data = await getTestData();
            console.log(data);
            const auth = new Auth();
            auth.handleAuthentication();
        };

        callGetTest();
    }, []);

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};
    

export default HomePage;