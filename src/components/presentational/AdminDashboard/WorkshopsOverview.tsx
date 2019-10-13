import * as React from "react";
import {
	getWorkshops,
	postWorkshop,
	updateWorkshop,
	removeWorkshop
} from "./../../../logic/functions/getAvailableWorkshops";
import { Workshop } from "../../../logic/domains/workshopDetails.domain";
import EditableTable, { EditOptions } from "../../presentational/EditableTable";
import { Add, Archive, Details } from "@material-ui/icons";
import { Button, Typography } from "@material-ui/core";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

export interface WorkshopOverviewProps {
	props: any;
	tab: string;
}

const icons = {
	Add: () => <Add /> as React.ReactElement<SvgIconProps>,
	Archive: () => <Archive /> as React.ReactElement<SvgIconProps>
};

const WorkshopOverview: React.SFC<WorkshopOverviewProps> = ({ props, tab }) => {
	const editOptions = {
		canAdd: true,
		canUpdate: true,
		canDelete: true,
		canArchive: true
	} as EditOptions;

	const [state, setState] = React.useState({
		columns: [
			{ title: "No", field: "no" },
			{ title: "Skill-Set", field: "skillSet" },
			{ title: "Short Title", field: "shortTitle" },
			{
				title: "Set Workshop",
				field: "setWorkshops",
				editable: "never",
				render: (rowData: Workshop) => <div>{renderWaitingList(rowData)}</div>
			}
		],
		data: [{} as Workshop]
	});

	const renderWaitingList = (workshop: Workshop) => {
		return (
			<Button color="primary" variant="outlined" onClick={amendDetails(workshop)}>
				Set Workshop
			</Button>
		);
	};

	const amendDetails = (eventData: Workshop) => (event: React.MouseEvent) => {
		props.history.push({
			pathname: `${props.match.path}/amenddetails/${eventData._id}`,
			// pathname: `${props.match.path}/amenddetails`,
			state: {
				eventData,
				isCurrentBooking: false
			}
		});
	};

	const isEmpty = (str: string): boolean => {
		return !str || 0 === str.length;
	};

	const validateWorkshops = (): boolean => {
		console.log(state.data);
		for (let workshop of state.data) {
			if (
				isEmpty(workshop.no.toString()) ||
				isEmpty(workshop.skillSet) ||
				isEmpty(workshop.shortTitle)
			) {
				return false;
			}
		}
		return true;
	};

	const submitNewWorkshops = async () => {
		if (validateWorkshops()) {
			for (const workshop of state.data) {
				if (workshop._id == null) {
					workshop.status = "Current";
					try {
						await postWorkshop(workshop);
						alert("Workshops created");
					} catch (err) {
						alert("An error occurred when creating the sessions");
					}
				} else {
					await updateWorkshop(workshop._id, workshop);
				}
			}
		} else {
			alert("Please fill in all fields for your new sessions");
		}
		callGetWorkshops();
	};

	async function callGetWorkshops() {
		let details = [] as Array<Workshop>;
		details = await getWorkshops();

		var workshopsTab = [] as Array<Workshop>;

		details.forEach(workshop => {
			if (workshop.status == tab) workshopsTab.push(workshop);
		});

		console.log(workshopsTab);

		setState({
			columns: [
				{ title: "No", field: "no" },
				{ title: "Skill-Set", field: "skillSet" },
				{ title: "Short Title", field: "shortTitle" },
				{
					title: "Set Workshop",
					field: "setWorkshops",
					editable: "never",
					render: (rowData: Workshop) => <div>{renderWaitingList(rowData)}</div>
				}
			],
			data: workshopsTab.map((workshop: Workshop) => {
				return workshop;
			})
		});
	}

	React.useEffect(() => {
		if (tab) {
			callGetWorkshops();
		}
	}, [tab]);

	const handleArchiveWorkshop = async (eventData: Workshop) => {
		var newStatus = null;
		if (tab == "Current") {
			newStatus = "Archived";
		} else {
			newStatus = "Current";
		}
		eventData.status = newStatus;
		await updateWorkshop(eventData._id, eventData);
		callGetWorkshops();
	};

	return (
		<div>
			<br />
			<Typography variant="h2">{tab} Workshops</Typography>
			<br />
			<EditableTable
				state={state}
				setState={setState}
				actions={[
					{
						icon: icons.Archive,
						tooltip: tab == "Current" ? "Archive" : "Unarchive",
						onClick: (event: any, rowData: Workshop) => handleArchiveWorkshop(rowData)
					}
				]}
				options={{ paging: false }}
				editOptions={editOptions}
				tableTitle={""}
			/>
			<br />
			<Button id="submitBooking" color="primary" size="large" onClick={submitNewWorkshops}>
				Save Workshops
			</Button>
		</div>
	);
};

export default WorkshopOverview;
