import * as React from "react";
import WorkshopsOverview from "./WorkshopsOverview";
import CenteredTabs from "../../presentational/CenteredTabs";
import { Typography } from "@material-ui/core";
import { RouteComponentProps } from "react-router";

type AdminWorkshopsContainerProps = RouteComponentProps<any> & {};

const workshopTabs = [
	{
		title: "Current"
	},
	{
		title: "Archived"
	}
];

const AdminWorkshopsContainer: React.SFC<AdminWorkshopsContainerProps> = props => {
	const { path } = props.match;
	const [state, setState] = React.useState({
		tab: "Current"
	});

	const myCallbackTab = (tabSelected: string) => {
		setState({
			tab: tabSelected
		});
	};

	return (
		<div>
			<br />
			<Typography variant="h3">Workshops</Typography>
			<CenteredTabs workshopTabs={workshopTabs} props={props} callbackTab={myCallbackTab} />
			{console.log("tab:" + state.tab)}
			{state.tab === "Current" ? (
				<WorkshopsOverview props={props} tab={state.tab} />
			) : (
				<WorkshopsOverview props={props} tab={state.tab} />
			)}
		</div>
	);
};

export default AdminWorkshopsContainer;
