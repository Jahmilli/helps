import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Typography } from "@material-ui/core";
import WorkshopSessionDetails from "../../presentational/AdminDashboard/WorkshopSessionDetails";

type AdminWorkshopSessionDetailsProps = RouteComponentProps<any> & {};

const AdminWorkshopSessionDetails: React.SFC<AdminWorkshopSessionDetailsProps> = props => {
    const [state, setState] = React.useState({
    });

    const myCallbackTab = (tabSelected: string) => {
        setState({

        });
    };

    return (
        <div style={{ margin: "0 5%" }}>
            <br />
            <Typography variant="h4">
                Edit: {props.location.state.eventData.Topic}
            </Typography>
            <br />
            <WorkshopSessionDetails props={props} />
        </div>
    );
};

export default withRouter(AdminWorkshopSessionDetails);
