import * as React from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { IWorkshopSession, IWorkshopSessionDetails } from './../../../logic/domains/workshopSessionDetails.domain';
import { createWorkshopSessionDetailStyle } from './styles'
import { updateWorkshopSession } from "../../../logic/functions/adminSessions";

export interface WorkshopSessionBookingProps {
    props: any;
    session: IWorkshopSession;
}

interface State {
    sessionDetails: IWorkshopSession
}

const WorkshopSessionBooking: React.FunctionComponent<WorkshopSessionBookingProps> = (props) => {
    const classes = createWorkshopSessionDetailStyle();
    let workshopSession = props.session;
    const [values, setValues] = React.useState<State>({
        sessionDetails: workshopSession
    });

    const addStudent = (bookingStudentId: String) => async (event: React.MouseEvent) => {

        let newSession = values.sessionDetails;
        newSession.waitingList.filter(studentId => studentId === bookingStudentId)

        var booking = {} as IWorkshopSessionDetails;
        booking.studentId = bookingStudentId;

        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        const todayDate = String(dd + '/' + mm + '/' + yyyy);

        booking.dateBooked = todayDate
        booking.attended = "-"

        newSession.confirmedList.push(booking)
        setValues({ sessionDetails: newSession })
        console.log(values.sessionDetails);

        var url = window.location.pathname;
        var new_str = url.substring(0, url.indexOf("/amendsession"));
        var workshopId = new_str.substring(new_str.lastIndexOf("/") + 1);

        try {
            await updateWorkshopSession(workshopId, String(newSession._id), newSession);
            alert("Student Added");
        } catch (err) {
            alert("An error occurred when creating the sessions");
        }

        // let sessionDetails = props.session;
        // sessionDetails.waitingList.filter(studentId => studentId === bookingStudentId)

        // var booking = {} as IWorkshopSessionDetails;
        // booking.studentId = bookingStudentId;

        // const today = new Date();
        // const dd = String(today.getDate()).padStart(2, '0');
        // const mm = String(today.getMonth() + 1).padStart(2, '0');
        // const yyyy = today.getFullYear();
        // const todayDate = String(dd + '/' + mm + '/' + yyyy);

        // booking.dateBooked = todayDate
        // booking.addended = "-"

        // sessionDetails.confirmedList.push(booking)

        // console.log(sessionDetails);

        // var url = window.location.pathname;
        // var new_str = url.substring(0, url.indexOf("/amendsession"));
        // var workshopId = new_str.substring(new_str.lastIndexOf("/") + 1);

        // try {
        //     await updateWorkshopSession(workshopId, String(sessionDetails._id), sessionDetails);
        //     alert("Student Added");
        // } catch (err) {
        //     alert("An error occurred when creating the sessions");
        // }
    }

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
                    <Button id="updateBooking" variant="outlined" color="primary" size="large" onClick={addStudent("")} type="submit">Add Student</Button>
                    <br />
                    <Grid container item xs={12} spacing={3}>
                        <StudentFormRow />
                    </Grid>
                </Paper>
            </React.Fragment>
        );
    }

    function WaitingListColumn(props: { studentId: String }) {
        return (
            <React.Fragment>
                <Grid container item xs={12} spacing={1}>
                    <React.Fragment>
                        <Grid item xs={6}>
                            <Paper className={classes.paperWaiting}>
                                <Typography variant="body1">
                                    {props.studentId}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paperWaiting}>
                                <Typography variant="body1">
                                    <Button id="updateBooking" variant="outlined" color="primary" size="small" onClick={addStudent(props.studentId)} type="submit">Add</Button>
                                </Typography>
                            </Paper>
                        </Grid>
                    </React.Fragment>
                </Grid>
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
                        <br />
                        {values.sessionDetails.waitingList.map((student: String) => {
                            return (<WaitingListColumn studentId={student} />)
                        })}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default WorkshopSessionBooking;
