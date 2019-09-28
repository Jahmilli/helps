import * as React from 'react';
import TopTabs from '../../presentational/AdminDashboard/TopTabs';
import { Route } from 'react-router';
import FilterSessions from '../../presentational/AdminDashboard/FilterSessions';
import { RouteComponentProps } from 'react-router';
import { getAvailableSessions } from '../../../logic/functions/getAvailableSessions';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import AdminReport from '../../presentational/AdminDashboard/AdminReport';

type AdminReportContainerProps = RouteComponentProps<any> & {}

const AdminReportContainer: React.FunctionComponent<AdminReportContainerProps> = (props) => {
    const { path } = props.match;

    const [sessions, setSessions] = React.useState<Array<ISession>>([]);
    React.useEffect(() => {
    }, []);

    return (
        <div style={{ margin: '0 5%' }}>
            <Route path={`${path}`} exact={true} render={() => (
                <div>
                    <AdminReport isAdmin={false}/>
                </div>
            )} />
        </div>
    );
};


export default AdminReportContainer;