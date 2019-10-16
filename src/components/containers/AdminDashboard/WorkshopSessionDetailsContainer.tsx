import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import { IWorkshopSession } from './../../../logic/domains/workshopSessionDetails.domain';
import { updateWorkshopSession } from "../../../logic/functions/adminSessions";
import { createWorkshopSessionDetailStyle } from './styles'

export interface WorkshopSessionDetailsProps {
    props: any;
    session: IWorkshopSession;
}

interface State {
    topic: string;
    targetGroup: string;
    sessionCoverage: string;
    cutoff: string;
    room: string;
}

// Column headings in the table used in this component
const WorkshopSessionDetails: React.FunctionComponent<WorkshopSessionDetailsProps> = (props) => {
    const classes = createWorkshopSessionDetailStyle();
    let sessionDetails = props.session;
    const [values, setValues] = React.useState<State>({
        topic: sessionDetails.topic,
        targetGroup: sessionDetails.targetGroup,
        sessionCoverage: sessionDetails.sessionCoverage,
        cutoff: sessionDetails.cutoff,
        room: sessionDetails.room,
    });

    const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const updateSession = async () => {
        if (sessionDetails._id !== null || sessionDetails._id !== undefined) {

            let newSession = {} as IWorkshopSession
            newSession = { ...sessionDetails, ...values }

            var url = window.location.pathname;
            var new_str = url.substring(0, url.indexOf("/amendsession"));
            var workshopId = new_str.substring(new_str.lastIndexOf("/") + 1);

            try {
                await updateWorkshopSession(workshopId, String(newSession._id), newSession);
                alert("Session updated");
            } catch (err) {
                alert("An error occurred when creating the sessions");
            }
        }
    }

    const workshopTime = `${sessionDetails.startDate} ${sessionDetails.startTime}-${sessionDetails.endTime}`

    return (
        <div style={{ margin: '0 5%' }}>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-full-width"
                    label="Topic"
                    value={values.topic}
                    onChange={handleChange('topic')}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="Target Group"
                    multiline
                    rows="6"
                    value={values.targetGroup}
                    onChange={handleChange('targetGroup')}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="What it covers"
                    multiline
                    rows="6"
                    value={values.sessionCoverage}
                    onChange={handleChange('sessionCoverage')}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="Cut-off"
                    helperText="Hours before the session starts"
                    value={values.cutoff}
                    onChange={handleChange('cutoff')}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="standard-name"
                    label="When"
                    disabled
                    value={workshopTime}
                    // onChange={handleChange('workshopDate')}  Can implement later
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="standard-name"
                    label="Room"
                    value={values.room}
                    onChange={handleChange('room')}
                    margin="normal"
                    fullWidth
                />
            </form>
            <br />
            <Button id="updateBooking" variant="outlined" color="primary" size="large" onClick={updateSession} type="submit">Update Session</Button>
            <br />
        </div>
    );
};

export default WorkshopSessionDetails;
