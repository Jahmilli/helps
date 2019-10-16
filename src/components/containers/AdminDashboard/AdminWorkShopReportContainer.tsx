import * as React from 'react';
import { Route } from 'react-router';
import { RouteComponentProps } from 'react-router';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import AdminWorkshopReport from '../../presentational/AdminDashboard/AdminWorkshopReport';

type AdminWorkShopReportContainerProps = RouteComponentProps<any> & {}

const AdminWorkShopReportContainer: React.FunctionComponent<AdminWorkShopReportContainerProps> = (props) => {
    const { path } = props.match;

    const [sessions, setSessions] = React.useState<Array<ISession>>([]);
    React.useEffect(() => {
    }, []);

    return (
        <div style={{ margin: '0 5%' }}>
            <Route path={`${path}`} exact={true} render={() => (
                <div>
                    <AdminWorkshopReport isAdmin={false}/>
                </div>
            )} />
        </div>
    );
};


export default AdminWorkShopReportContainer;