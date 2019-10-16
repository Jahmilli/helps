import React from "react";
import { ISession, ISessionDetails } from "../../../logic/domains/sessionDetails.domain";
import EditableTable from "../EditableTable";
import { Add } from "@material-ui/icons";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { withRouter, RouteComponentProps } from "react-router";
import {
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
	FormGroup,
	Button
} from "@material-ui/core";

type SessionDetails = RouteComponentProps<any> & {};

const icons = {
	Add: () => <Add /> as React.ReactElement<SvgIconProps>
};

const StudentWorkshopDetail: React.FunctionComponent<SessionDetails> = props => {
	console.log("state from router is ", props.location.state);
	const {
		reason,
		subjectName,
		assignmentType,
		additionalHelpDetails,
		location
	} = props.location.state;
	const [state, setState] = React.useState({});

	return (
		<div style={{ margin: "0 3%" }}>
			<Typography display="block">Subject name: {subjectName}</Typography>
			<Typography display="block">Location: {location}</Typography>
			<Typography display="block">Reason: {reason}</Typography>
			<Typography display="block">Type of Assignment: {assignmentType}</Typography>
			<Typography display="block">Addtional information: {additionalHelpDetails}</Typography>
			<Button id="BookBtn" color="primary" size="small" type="submit" variant="outlined">
				Register for workshop
			</Button>
		</div>
	);
};

export default withRouter(StudentWorkshopDetail);
