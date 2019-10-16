import * as React from "react";
import { Typography } from "@material-ui/core";
import { createSessionStyle } from "./styles";

export interface WorkshopSessionDetailsProps {
    props: any;
}

// Column headings in the table used in this component
const WorkshopSessionDetails: React.FunctionComponent<WorkshopSessionDetailsProps> = ({ props }) => {
    const classes = createSessionStyle();

    return (
        <div className={classes.lockup}>
            <Typography variant="body1">
                To add sessions, please enter their details below and click "Add". If you do not
				wish to add a session that you have selected a date time for, please click "Clear"
				next to that session before adding.
			</Typography>
        </div>
    );
};

export default WorkshopSessionDetails;
