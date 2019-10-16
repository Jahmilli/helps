import * as React from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { IWorkshopSession } from './../../../logic/domains/workshopSessionDetails.domain';
import { createWorkshopSessionDetailStyle } from './styles'

export interface WorkshopSessionBookingProps {
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

const addStudent = () => {

}



// Column headings in the table used in this component
const WorkshopSessionBooking: React.FunctionComponent<WorkshopSessionBookingProps> = (props) => {
    const classes = createWorkshopSessionDetailStyle();
    let sessionDetails = props.session;

    function StudentFormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paperBooking}>
                        <Typography variant="body1">
                            Student Id
			            </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paperBooking}>
                        <Typography variant="body1">
                            Booked Date
			            </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paperBooking}>
                        <Typography variant="body1">
                            Attendance
			            </Typography>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }

    function BookingListColumn() {
        return (
            <React.Fragment>
                <Paper className={classes.paper}>
                    <Typography variant="h5">
                        Booking List
			            </Typography>
                    <TextField
                        id="standard-uncontrolled"
                        label="Student Id"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                    />
                    <Button id="updateBooking" variant="outlined" color="primary" size="large" onClick={addStudent} type="submit">Add Student</Button>
                    <br />
                    <Grid container item xs={12} spacing={3}>
                        <StudentFormRow />
                    </Grid>
                </Paper>
            </React.Fragment>
        );
    }

    return (
        <div style={{ margin: '0 5%' }}>
            <Grid container justify="center" spacing={10}>
                <Grid key={0} item>
                    <BookingListColumn />
                </Grid>
                <Grid key={1} item>
                    <Paper className={classes.paper}>
                        <Typography variant="h5">
                            Waiting List
			            </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default WorkshopSessionBooking;
