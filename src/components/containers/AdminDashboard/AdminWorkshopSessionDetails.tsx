import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Typography } from "@material-ui/core";
import WorkshopSessionDetailsContainer from "./WorkshopSessionDetailsContainer";
import WorkshopSessionBookingContainer from "./WorkshopSessionBookingContainer";

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
                Edit Workshop Session: {props.location.state.eventData.topic}
            </Typography>
            <br />
            <br />
            <WorkshopSessionDetailsContainer props={props} session={props.location.state.eventData} />
            <br />
            <br />
            <Typography variant="h4">
                Student List
            </Typography>
            <br />
            <br />
            <WorkshopSessionBookingContainer props={props} session={props.location.state.eventData} />
        </div>
    );
};

export default withRouter(AdminWorkshopSessionDetails);
