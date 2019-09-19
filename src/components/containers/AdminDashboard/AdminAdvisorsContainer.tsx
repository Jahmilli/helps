import * as React from 'react';
import TopTabs from '../../presentational/AdminDashboard/TopTabs';
import { Route } from 'react-router';
import FilterSessions from '../../presentational/AdminDashboard/FilterSessions';
import { RouteComponentProps } from 'react-router';
import { getAvailableSessions } from '../../../logic/functions/getAvailableSessions';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import AvailableAdvisors from '../../presentational/AdminDashboard/AvailableAdvisors';
import InactiveAdvisors from '../../presentational/AdminDashboard/InactiveAdvisors';

type AdminAdvisorsContainerProps = RouteComponentProps<any> & {}

const AdminAdvisorsContainer: React.FunctionComponent<AdminAdvisorsContainerProps> = (props) => {
    const { path } = props.match;

    const [sessions, setSessions] = React.useState<Array<ISession>>([]);
    React.useEffect(() => {
        // async function callGetSessions() {
        //     try {
        //         const sessions = await getAvailableSessions();
        //         setSessions(sessions)
        //     } catch(err) {
        //         alert('An error occurred when getting sessions');
        //     }
        // } 
        // callGetSessions();
    }, []);
    
    return (
        <div style={{ margin: '0 5%' }}>
            <Route path={`${path}`} exact={true} render={() => (
                <div>
                    <AvailableAdvisors advisorData={sessions} isAdmin={false} />
                    <InactiveAdvisors />
                </div>
                )} />
        </div>
    );
};
    

export default AdminAdvisorsContainer;