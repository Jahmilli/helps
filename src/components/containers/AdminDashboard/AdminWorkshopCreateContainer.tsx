import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Typography } from "@material-ui/core";
import WorkshopStatus from "../../presentational/WorkshopStatus";
import CreateWorkshopSessions from "../../presentational/AdminDashboard/CreateWorkshopSessions";
import CreateMultipleSessions from "../../presentational/AdminDashboard/CreateMultipleSessions";

type AdminWorkshopCreateContainerProps = RouteComponentProps<any> & {};

const sessionTab = ["Single", "Mulitiple"];

const AdminWorkshopCreateContainer: React.SFC<AdminWorkshopCreateContainerProps> = props => {
	const [state, setState] = React.useState({
		tab: sessionTab[0]
	});

	const myCallbackTab = (tabSelected: string) => {
		setState({
			tab: tabSelected
		});
	};

	return (
		<div style={{ margin: "0 5%" }}>
			<br />
			<Typography variant="h4">
				Create Sessions: {props.location.state.eventData.shortTitle}
			</Typography>
			<br />
			<WorkshopStatus workshopTabs={sessionTab} callbackTab={myCallbackTab} />
			{state.tab === sessionTab[0] ? <CreateWorkshopSessions props={props} /> : <CreateMultipleSessions />}
		</div>
	);
};

export default withRouter(AdminWorkshopCreateContainer);
