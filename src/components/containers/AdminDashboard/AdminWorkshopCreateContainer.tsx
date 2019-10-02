import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import CreateSessions from '../../presentational/AdminDashboard/CreateSessions';

type AdminWorkshopCreateContainerProps = RouteComponentProps<any> & {};


const AdminWorkshopCreateContainer: React.SFC<AdminWorkshopCreateContainerProps> = props => {

    return (
        <div style={{ margin: '0 5%' }}>
            <CreateSessions />
        </div>
    );
};

export default withRouter(AdminWorkshopCreateContainer);
