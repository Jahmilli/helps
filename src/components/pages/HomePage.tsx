import * as React from 'react';
import { getTestData } from '../../logic/functions/testFetch';

const HomePage: React.FunctionComponent = () => {
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