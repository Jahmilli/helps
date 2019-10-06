import * as React from "react";
import { Typography, Button } from "@material-ui/core";
import { ISession } from "../../../logic/domains/sessionDetails.domain";
import EditableTable, { EditOptions } from "../EditableTable";
import { createNewSessions } from "../../../logic/functions/createNewSessions";
import { createSessionStyle } from "./styles";
import { isValidDate, isEmpty, DATE_FORMAT, TIME_FORMAT, isValidTime } from "../../utils/Constants";

interface CreateSessionsProps { }

// Column headings in the table used in this component
const CreateSessions: React.FunctionComponent<CreateSessionsProps> = () => {
	const classes = createSessionStyle();
	const editOptions = {
		canAdd: true,
		canUpdate: true,
		canDelete: true
	} as EditOptions;

	const [state, setState] = React.useState({
		columns: [
			{ title: "Date", field: "date" },
			{ title: "Start Time", field: "startTime" },
			{ title: "End Time", field: "endTime" },
			{ title: "Room", field: "room" },
			// { title: 'A/NA', field: '' },
			{ title: "Type", field: "type" }
		],
		// @ts-ignore
		data: [{
			date: DATE_FORMAT,
			startTime: TIME_FORMAT,
			endTime: TIME_FORMAT,
			room: '',
			type: ''
		} as ISession]
	});

	const validateSessions = (): boolean => {
		for (let session of state.data) {
			if (
				!isValidDate(session.date) ||
				(!isValidTime(session.startTime) ||
					!isValidTime(session.endTime) ||
					isEmpty(session.room) ||
					isEmpty(session.type))
			) {
				return false;
			}
		}
		return true;
	};

	const submitNewSessions = async () => {
		if (validateSessions()) {
			const tempData = state.data as Array<ISession>;
			for (let index in state.data) {
				tempData[index] = { ...tempData[index], advisor: "current advisor" };
				// TODO: delete tableData key and value
			}
			try {
				await createNewSessions(tempData);
				alert("Sessions created");
			} catch (err) {
				alert("An error occurred when creating the sessions");
			}
		} else {
			alert("Please fill in all fields for your new sessions in the correct format");
		}
	};

	return (
		<div className={classes.lockup}>
			<Typography variant="body1">
				To add sessions, please enter their details below and click "Add". If you do not
				wish to add a session that you have selected a date & time for, please click "Clear"
				next to that session before adding.
			</Typography>
			<Typography variant="body1">
				Please note: all the fields are compulsory, otherwise that session will not be
				added.
			</Typography>
			<EditableTable
				state={state}
				setState={setState}
				options={{ paging: false }}
				editOptions={editOptions}
				tableTitle={"Create Sessions"}
			/>
			<br />
			<Button id="submitBooking" color="primary" size="large" onClick={submitNewSessions}>
				Book Session
			</Button>
		</div>
	);
};

export default CreateSessions;
