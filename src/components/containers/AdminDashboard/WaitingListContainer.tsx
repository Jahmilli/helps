import * as React from 'react';
import TopTabs from '../../presentational/AdminDashboard/TopTabs';
import AvailableSessions from '../../presentational/AdminDashboard/AvailableSessions';
import CreateSessions from '../../presentational/AdminDashboard/CreateSessions';
import { Route } from 'react-router';
import FilterSessions from '../../presentational/AdminDashboard/FilterSessions';
import { RouteComponentProps } from 'react-router';
import { getWaitingList } from '../../../logic/functions/getWaitingList';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import WaitingList from '../../pages/WaitingList';

type WaitingListContainerProps = RouteComponentProps<any> & {}

const WaitingListContainer: React.FunctionComponent<WaitingListContainerProps> = (props) => {
    const { path } = props.match;
    

    const [sessions, setSessions] = React.useState<Array<ISession>>([]);
    React.useEffect(() => {
        async function callGetSessions() {
            try {
                const sessions = await getWaitingList();
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
                    <WaitingList sessionData={sessions} />
                    <CreateSessions />
                </div>
                )} />
        </div>
    );
};
    

export default WaitingListContainer;