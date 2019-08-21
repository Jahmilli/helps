import * as React from 'react';
import TopTabs from '../../presentational/AdminDashboard/TopTabs';
import AvailableSessionsContainer from './AvailableSessionsContainer';
import CreateSessionsContainer from './CreateSessionsContainer';
import { Route } from 'react-router';

interface AdminSessionContainerProps {
    props: any;
};

const AdminSessionContainer: React.FunctionComponent<AdminSessionContainerProps> = ({ props }) => {
    const { path } = props.match;
    return (
        <div style={{ margin: '0 5%' }}>
            <TopTabs />
            <Route path={`${path}`} exact={true} render={() => (
                <div>
                    <AvailableSessionsContainer />
                    <CreateSessionsContainer />
                </div>
                )} />
            <Route path={`${path}/adminSessions`} exact={true} render={() => (
                <div>
                    <AvailableSessionsContainer />
                    <CreateSessionsContainer />
                </div>
                )} />
        </div>
    );
};
    

export default AdminSessionContainer;