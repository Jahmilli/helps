import * as React from 'react';
import { Route } from 'react-router';

interface StudentDashboardContainerProps {
    path: string;
}

const StudentDashboardContainer: React.FunctionComponent<StudentDashboardContainerProps> = ({ path }) => {
    return (
        <div style={{height: '500px'}}>
            <Route path={`${path}/exit`} component={() => <h1>HI</h1>} />
            <Route path={`${path}/programs`} component={() => <h1>Hello</h1>} />
            <Route path={`${path}/faq`} component={() => <h1>Chow</h1>} />
        </div>
    );
}

export default StudentDashboardContainer;