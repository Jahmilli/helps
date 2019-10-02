import * as React from "react";
import WorkshopsOverview from "../../presentational/AdminDashboard/WorkshopsOverview";
import WorkshopStatus from "../../presentational/WorkshopStatus";
import { RouteComponentProps } from "react-router";

type AdminWorkshopsOverviewContainerProps = RouteComponentProps<any> & {};


const workshopTabs = ["Current", "Archived"];

const AdminWorkshopsOverviewContainer: React.SFC<AdminWorkshopsOverviewContainerProps> = props => {
	const [state, setState] = React.useState({
		tab: workshopTabs[0]
	});

	const myCallbackTab = (tabSelected: string) => {
		setState({
			tab: tabSelected
		});
	};

	return (
		<div style={{ margin: '0 5%' }}>
			<br />
			<WorkshopStatus workshopTabs={workshopTabs} callbackTab={myCallbackTab} />
			{state.tab === workshopTabs[0] ? (
				<WorkshopsOverview props={props} tab={state.tab} />
			) : (
					<WorkshopsOverview props={props} tab={state.tab} />
				)}
		</div>
	);
};

export default AdminWorkshopsOverviewContainer;
