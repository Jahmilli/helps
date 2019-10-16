import * as React from "react";
import { Typography, Button } from "@material-ui/core";
import { IWorkshopSession } from "../../../logic/domains/workshopSessionDetails.domain";
import EditableTable, { EditOptions } from "../EditableTable";
import { postWorkshopSession, updateWorkshopSession, getWorkshopSessions } from "../../../logic/functions/adminSessions";
import { createSessionStyle } from "./styles";

export interface CreateSessionsProps {
    props: any;
}

// Column headings in the table used in this component
const CreateSessions: React.FunctionComponent<CreateSessionsProps> = ({ props }) => {
    const classes = createSessionStyle();
    const editOptions = {
        canAdd: true,
        canUpdate: true,
        canDelete: true
    } as EditOptions;

    const [state, setState] = React.useState({
        columns: [
            { title: "Topic", field: "topic" },
            { title: "Start Date", field: "startDate" },
            { title: "End Date", field: "endDate" },
            { title: "Start Time", field: "startTime" },
            { title: "End Time", field: "endTime" },
            { title: "Room", field: "room" },
            { title: "Max", field: "maxStudents" },
            { title: "C/O", field: "cutoff" },
            {
                title: "Details",
                field: "details",
                editable: "never",
                render: (rowData: IWorkshopSession) => <div>{renderSession(rowData)}</div>
            }
        ],
        data: [{} as IWorkshopSession]
    });

    const renderSession = (workshop: IWorkshopSession) => {
        return (
            <Button color="primary" variant="outlined" onClick={amendDetails(workshop)}>
                Details
			</Button>
        );
    };

    const amendDetails = (eventData: IWorkshopSession) => (event: React.MouseEvent) => {
        props.history.push({
            pathname: `${window.location.pathname}/amendsession/${eventData._id}`,
            state: {
                eventData,
                isCurrentBooking: false
            }
        });
    };

    const isEmpty = (str: string): boolean => {
        return !str || 0 === str.length;
    };

    const validateSessions = (): boolean => {
        for (let session of state.data) {
            if (
                isEmpty(session.topic) ||
                isEmpty(session.startDate) ||
                isEmpty(session.endDate) ||
                isEmpty(session.startTime) ||
                isEmpty(session.endTime) ||
                isEmpty(session.room) ||
                isEmpty(session.maxStudents) ||
                isEmpty(session.cutoff)
            ) {
                return false;
            }
        }
        return true;
    };

    const submitNewSessions = async () => {
        var url = window.location.pathname;
        const workshopId = url.substring(url.lastIndexOf("/") + 1);
        if (validateSessions()) {
            for (const session of state.data) {
                if (session._id == null) {
                    try {
                        await postWorkshopSession(workshopId, session);
                        alert("Sessions created");
                    } catch (err) {
                        alert("An error occurred when creating the sessions");
                    }
                } else {
                    await updateWorkshopSession(workshopId, session._id, session);
                }
            }
        } else {
            alert("Please fill in all fields for your new sessions");
        }
        callGetWorkshopSessions();
    };

    React.useEffect(() => {
        callGetWorkshopSessions();
    }, [0]);

    async function callGetWorkshopSessions() {
        var url = window.location.pathname;
        const workshopId = url.substring(url.lastIndexOf("/") + 1);
        let sessions = [] as Array<IWorkshopSession>;
        sessions = await getWorkshopSessions(workshopId);
        setState({
            columns: [
                { title: "Topic", field: "topic" },
                { title: "Start Date", field: "startDate" },
                { title: "End Date", field: "endDate" },
                { title: "Start Time", field: "startTime" },
                { title: "End Time", field: "endTime" },
                { title: "Room", field: "room" },
                { title: "Max", field: "maxStudents" },
                { title: "C/O", field: "cutoff" },
                {
                    title: "Details",
                    field: "details",
                    editable: "never",
                    render: (rowData: IWorkshopSession) => <div>{renderSession(rowData)}</div>
                }
            ],
            data: sessions.map((session: IWorkshopSession) => {
                return session;
            })
        });
    }

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
