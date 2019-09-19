import * as React from "react";
import { Typography } from "@material-ui/core";
import { ISession, ISessionDetails } from "../../../logic/domains/sessionDetails.domain";
import EditableTable from "../EditableTable";
import { Add } from "@material-ui/icons";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface SessionDetails {
	data: ISessionDetails;
}

const icons = {
	Add: () => <Add /> as React.ReactElement<SvgIconProps>
};

const StudentSessionDetail: React.FunctionComponent<SessionDetails> = ({ data }) => {
	const [state, setState] = React.useState({});

	React.useEffect(() => {
		console.log("data is ", data);
		if (data) {
			setState({
				columns: [
					{ title: "Reason", field: "reason" },
					{ title: "Subject name", field: "subjectName" },
					{ title: "Type of Assignment", field: "assignmentType" },
					{ title: "Group Assignment", field: "isGroupAssignment" },
					// { title: 'A/NA', field: '' },
					{ title: "Topics to be discussed", field: "needsHelpWithOptions" },
					{ title: "Other possible discussions", field: "additionalHelpDetails" }
				],
				data: data.map((session: ISessionDetails) => session)
			});
		}
	}, [data]);

	return (
		<div>
			<Typography variant="h2">Sessions detail</Typography>
			<EditableTable
				state={state}
				setState={setState}
				options={{ toolbar: false, paging: false }}
			/>
		</div>
	);
};

export default StudentSessionDetail;
