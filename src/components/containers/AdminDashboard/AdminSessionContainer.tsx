import * as React from 'react';
import TopTabs from '../../presentational/AdminDashboard/TopTabs';
import AvailableSessions from '../../presentational/AdminDashboard/AvailableSessions';
import CreateSessions from '../../presentational/AdminDashboard/CreateSessions';
import { Route } from 'react-router';
import FilterSessions from '../../presentational/AdminDashboard/FilterSessions';
import { RouteComponentProps } from 'react-router';
import { getAvailableSessions } from '../../../logic/functions/getAvailableSessions';
import { ISession } from '../../../logic/domains/sessionDetails.domain';

type AdminSessionContainerProps = RouteComponentProps<any> & {}

const AdminSessionContainer: React.FunctionComponent<AdminSessionContainerProps> = (props) => {
    const { path } = props.match;

    const [sessions, setSessions] = React.useState<Array<ISession>>([]);
    React.useEffect(() => {
        async function callGetSessions() {
            try {
                const sessions = await getAvailableSessions();
                setSessions(sessions)
            } catch(err) {
                alert('An error occurred when getting sessions');
            }
        }
        
        callGetSessions();
    }, []);
    return (
        <div style={{ margin: '0 5%' }}>
            <TopTabs />
            {/* <FilterSessions /> */}
            <Route path={`${path}`} exact={true} render={() => (
                <div>
                    <AvailableSessions sessionData={sessions} isAdmin={false} />
                    <CreateSessions />
                </div>
                )} />
            <Route path={`${path}/adminSessions`} exact={true} render={() => (
                <div>
                    <AvailableSessions sessionData={sessions} isAdmin={true} />
                    <CreateSessions />
                </div>
                )} />
        </div>
    );
};
    

export default AdminSessionContainer;