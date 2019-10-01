import * as React from "react";
import {
	getCurrentWorkshops,
	getArchivedWorkshops,
	postWorkshop,
	setWorkshopToArchive,
	setWorkshopToCurrent
} from "./../../../logic/functions/getAvailableWorkshops";
import { Workshop } from "../../../logic/domains/workshopDetails.domain";
import EditableTable, { EditOptions } from "../../presentational/EditableTable";
import { Add, Archive, Details } from "@material-ui/icons";
import { Button } from "@material-ui/core";
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
			pathname: `${props.match.path}/amendDetails/${eventData._id}`,
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
			const tempData = state.data as Array<Workshop>;
			for (let index in state.data) {
				tempData[index] = { ...tempData[index] };
				// TODO: delete tableData key and value
			}
			try {
				await postWorkshop(tempData);
				alert("Sessions created");
			} catch (err) {
				alert("An error occurred when creating the sessions");
			}
		} else {
			alert("Please fill in all fields for your new sessions");
		}
	};

	React.useEffect(() => {
		if (tab) {
			async function callGetWorkshops() {
				let details = null;
				if (tab === "Current") {
					details = await getCurrentWorkshops();
				} else {
					details = await getArchivedWorkshops();
				}

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
					data: details.map((Workshop: Workshop) => {
						return Workshop;
					})
				});
			}
			callGetWorkshops();
		}
	}, [tab]);

	const handleArchiveWorkshop = (eventData: Workshop) => {
		if (tab == "Current") {
			setWorkshopToArchive(eventData);
		} else {
			setWorkshopToCurrent(eventData);
		}
	};

	return (
		<div>
			<br />
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
				tableTitle={"Create Workshops"}
			/>
			<Button id="submitBooking" color="primary" size="large" onClick={submitNewWorkshops}>
				Save Workshops
			</Button>
		</div>
	);
};

export default WorkshopOverview;
