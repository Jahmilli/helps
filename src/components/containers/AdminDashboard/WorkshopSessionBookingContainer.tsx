import * as React from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
	IWorkshopSession,
	IWorkshopSessionDetails
} from "./../../../logic/domains/workshopSessionDetails.domain";
import { createWorkshopSessionDetailStyle } from "./styles";
import { updateWorkshopSession } from "../../../logic/functions/adminSessions";

export interface WorkshopSessionBookingProps {
	props: any;
	session: IWorkshopSession;
}

interface State {
	sessionDetails: IWorkshopSession;
	manualStudent: string;
}

const WorkshopSessionBooking: React.FunctionComponent<WorkshopSessionBookingProps> = props => {
	const classes = createWorkshopSessionDetailStyle();
	let workshopSession = props.session;
	const url = window.location.pathname;
	const new_str = url.substring(0, url.indexOf("/amendsession"));
	const workshopId = new_str.substring(new_str.lastIndexOf("/") + 1);

	const [values, setValues] = React.useState<State>({
		sessionDetails: workshopSession,
		manualStudent: ""
	});

	const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, manualStudent: event.target.value });
	};

	const addStudent = (bookingStudentId: string) => async (event: React.MouseEvent) => {
		let newSession = values.sessionDetails;

		const newWaitingList = (values.sessionDetails.waitingList).filter(studentId => studentId !== bookingStudentId);
		newSession.waitingList = newWaitingList;

		const today = new Date();
		const dd = String(today.getDate()).padStart(2, "0");
		const mm = String(today.getMonth() + 1).padStart(2, "0");
		const yyyy = today.getFullYear();
		const todayDate = String(dd + "/" + mm + "/" + yyyy);

		var booking = {} as IWorkshopSessionDetails;
		booking.studentId = bookingStudentId;
		booking.dateBooked = todayDate;
		booking.attended = "No";

		newSession.confirmedList.push(booking);

		try {
			await updateWorkshopSession(workshopId, String(newSession._id), newSession);
			setValues({ sessionDetails: newSession, manualStudent: "" });
		} catch (err) {
			alert("An error occurred when creating the sessions");
		}
	};

	const markAttendance = (booking: IWorkshopSessionDetails) => async (event: React.MouseEvent) => {
		let newSession = values.sessionDetails;

		const index = newSession.confirmedList.findIndex(
			studentId => String(studentId) === String(booking.studentId)
		);

		if (booking.attended === "Yes") {
			booking.attended = "No"
		} else {
			booking.attended = "Yes"
		}

		newSession.confirmedList[index] = booking;

		try {

			await updateWorkshopSession(workshopId, String(newSession._id), newSession);
			setValues({ sessionDetails: newSession, manualStudent: "" });
		} catch (err) {
			alert("An error occurred when creating the sessions");
		}
	}

	function StudentFormRow(props: { booking: IWorkshopSessionDetails }) {
		return (
			<React.Fragment>
				<Grid item xs={3}>
					<Paper className={classes.paperBooking}>
						<Typography variant="body1">{props.booking.studentId}</Typography>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paperBooking}>
						<Typography variant="body1">{props.booking.dateBooked}</Typography>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paperBooking}>
						<Typography variant="body1">{props.booking.attended}</Typography>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paperBooking}>
						<Button
							id="updateBooking"
							variant="outlined"
							color="primary"
							size="small"
							onClick={markAttendance(props.booking)}
							type="submit"
						>
							Attendance
					</Button>
					</Paper>
				</Grid>
			</React.Fragment>
		);
	}

	function BookingListColumn() {
		return (
			<React.Fragment>
				<Paper className={classes.paper}>
					<Typography variant="h5">Booking List</Typography>
					<TextField
						id="standard-uncontrolled"
						label="Student Id"
						value={values.manualStudent}
						onChange={handleChange()}
						className={classes.textField}
						margin="normal"
					/>
					<Button
						id="updateBooking"
						variant="outlined"
						color="primary"
						size="large"
						onClick={addStudent(values.manualStudent)}
						type="submit"
					>
						Add Student
					</Button>
					<br />
					<br />
					<Grid container item xs={12} spacing={3}>
						<React.Fragment>
							<Grid item xs={3}>
								<Paper className={classes.paperBookingTitle}>
									<Typography variant="body1">Student Id</Typography>
								</Paper>
							</Grid>
							<Grid item xs={3}>
								<Paper className={classes.paperBookingTitle}>
									<Typography variant="body1">Book Date</Typography>
								</Paper>
							</Grid>
							<Grid item xs={3}>
								<Paper className={classes.paperBookingTitle}>
									<Typography variant="body1">Attendance</Typography>
								</Paper>
							</Grid>
							<Grid item xs={3}>
								<Paper className={classes.paperBookingTitle}>
									<Typography variant="body1">Mark</Typography>
								</Paper>
							</Grid>
						</React.Fragment>
						{values.sessionDetails.confirmedList.map((booking: IWorkshopSessionDetails, index: number) => {
							return <StudentFormRow key={index} booking={booking} />
						})}
					</Grid>
				</Paper>
			</React.Fragment>
		);
	}

	function WaitingListColumn(props: { studentId: string }) {
		return (
			<React.Fragment>
				<Grid container item xs={12} spacing={1}>
					<React.Fragment>
						<Grid item xs={6}>
							<Paper className={classes.paperWaiting}>
								<Typography variant="body1">{props.studentId}</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paperWaiting}>
								<Typography variant="body1">
									<Button
										id="updateBooking"
										variant="outlined"
										color="primary"
										size="small"
										onClick={addStudent(props.studentId)}
										type="submit"
									>
										Add
									</Button>
								</Typography>
							</Paper>
						</Grid>
					</React.Fragment>
				</Grid>
			</React.Fragment>
		);
	}

	return (
		<div style={{ margin: "0 5%" }}>
			<Grid container justify="center" spacing={10}>
				<Grid key={0} item>
					<BookingListColumn />
				</Grid>
				<Grid key={1} item>
					<Paper className={classes.paper}>
						<Typography variant="h5">Waiting List</Typography>
						<br />
						{values.sessionDetails.waitingList.map((student: string, index: number) => {
							return <WaitingListColumn key={index} studentId={student} />;
						})}
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default WorkshopSessionBooking;
