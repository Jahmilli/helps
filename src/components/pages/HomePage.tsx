import * as React from 'react';
import { getTestData } from '../../logic/functions/testFetch';

interface HomePageProps {
    auth: any
};

const HomePage: React.FunctionComponent<HomePageProps> = ({ auth }) => {
    React.useEffect(() => {
        const callGetTest = async () => {
            let data = await getTestData();
            console.log(data);
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