import * as React from 'react';
import { getTestData } from '../../logic/functions/testFetch';
import Auth from '../../logic/functions/core/Auth';

interface HomePageProps {
    auth: Auth; 
};

const HomePage: React.FunctionComponent<HomePageProps> = ({ auth }) => {
    React.useEffect(() => {
        const callGetTest = async () => {
            let data = await getTestData();
            console.log(data);
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