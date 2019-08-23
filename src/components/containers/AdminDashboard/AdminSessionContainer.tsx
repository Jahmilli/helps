import * as React from 'react';
import TopTabs from '../../presentational/AdminDashboard/TopTabs';
import AvailableSessionsContainer from './AvailableSessionsContainer';
import CreateSessionsContainer from './CreateSessionsContainer';
import { Route } from 'react-router';
import FilterSessions from '../../presentational/AdminDashboard/FilterSessions';
import { RouteComponentProps } from 'react-router';

type AdminSessionContainerProps = RouteComponentProps<any> & {}

const AdminSessionContainer: React.FunctionComponent<AdminSessionContainerProps> = (props) => {
    const { path } = props.match;
    return (
        <div style={{ margin: '0 5%' }}>
            <TopTabs />
            {/* <FilterSessions /> */}
            <Route path={`${path}`} exact={true} render={() => (
                <div>
                    <AvailableSessionsContainer isAdmin={false} />
                    <CreateSessionsContainer />
                </div>
                )} />
            <Route path={`${path}/adminSessions`} exact={true} render={() => (
                <div>
                    <AvailableSessionsContainer isAdmin={true} />
                    <CreateSessionsContainer />
                </div>
                )} />
        </div>
    );
};
    

export default AdminSessionContainer;