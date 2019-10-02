import React from 'react';
import { Typography } from "@material-ui/core";
import { ISession, ISessionDetails } from "../../../logic/domains/sessionDetails.domain";
import EditableTable from "../EditableTable";
import { Add } from "@material-ui/icons";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { withRouter, RouteComponentProps } from 'react-router';

type SessionDetails = RouteComponentProps<any> & {};

const icons = {
	Add: () => <Add /> as React.ReactElement<SvgIconProps>
};

const StudentWorkshopDetail: React.FunctionComponent<SessionDetails> = (props) => {
	console.log('state from router is ', props.location.state);
	const { name } = props.location.state;
	const [state, setState] = React.useState({});
	

	// React.useEffect(() => {
	// 	console.log("data is ", data);
	// 	console.log("entered workshop details component");
	// 	if (data) {
	// 		setState({
	// 			columns: [
	// 				{ title: "Reason", field: "reason" },
	// 				{ title: "Subject name", field: "subjectName" },
	// 				{ title: "Type of Assignment", field: "assignmentType" },
	// 				{ title: "Group Assignment", field: "isGroupAssignment" },
	// 				// { title: 'A/NA', field: '' },
	// 				{ title: "Topics to be discussed", field: "needsHelpWithOptions" },
	// 				{ title: "Other possible discussions", field: "additionalHelpDetails" }
	// 			],
	// 			data: data.map((session: ISessionDetails) => session)
	// 		});
	// 	}
	// }, [data]);

	return (
		// <div>
		// 	<Typography variant="h2">Sessions detail</Typography>
		// 	<EditableTable
		// 		state={state}
		// 		setState={setState}
		// 		options={{ toolbar: false, paging: false }}
		// 	/>
			
		// </div>
		<div style={{ margin: '0 3%' }}>
			<h1>{ name || 'Workshop Name was Empty'}</h1>
			<h1></h1>
		</div>
	);
};

export default withRouter(StudentWorkshopDetail);
