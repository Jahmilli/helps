import * as React from "react";
import { createSessionStyle } from "./styles";
// import EditableTable, { EditOptions } from "../EditableTable";
import CreateMultipleSessionsTable, { EditOptions } from "../CreateMultipleSessionsTable";
import { ISession } from "../../../logic/domains/sessionDetails.domain";
import { createNewSessions } from "../../../logic/functions/createNewSessions";
import { Typography, Button } from "@material-ui/core";

export interface CreateMultipleSessionsProps {
    workshop: any;
}

const CreateMultipleSessions: React.SFC<CreateMultipleSessionsProps> = ({ workshop }) => {
    const classes = createSessionStyle();
    const editOptions = {
        canAdd: true,
        canUpdate: true,
        canDelete: true
    } as EditOptions;

    const [state, setState] = React.useState({
        columns: [
            { title: "Start Date", field: "date" },
            { title: "Weeks", field: "startTime" },
            { title: "Days", field: "endTime" },
            { title: "Max", field: "type" },
            { title: "C/O", field: "type" },
            { title: "Remiender", field: "type" },
            { title: "Room", field: "room" },
        ],
        data: [{} as ISession]
    });

    const isEmpty = (str: string): boolean => {
        return !str || 0 === str.length;
    };

    const validateSessions = (): boolean => {
        for (let session of state.data) {
            if (
                isEmpty(session.date) ||
                (isEmpty(session.startTime) ||
                    isEmpty(session.endTime) ||
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
            alert("Please fill in all fields for your new sessions");
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
            <CreateMultipleSessionsTable
                state={state}
                setState={setState}
                options={{ paging: false }}
                editOptions={editOptions}
                tableTitle={"Create Multiple Sessions"}
            />
            <br />
            <Button id="submitBooking" color="primary" size="large" onClick={submitNewSessions}>
                Book Multiple Sessions
			</Button>
        </div>
    );
};

export default CreateMultipleSessions;
