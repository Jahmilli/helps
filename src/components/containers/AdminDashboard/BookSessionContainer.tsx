import * as React from 'react';
import { Typography, FormGroup, Button } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import TextLockup from '../../presentational/TextLockup';
import bookSession from '../../../logic/functions/bookSession'; 
import CheckboxOption from '../../presentational/AdminDashboard/CheckboxOption';
import SessionBookingField from '../../presentational/AdminDashboard/SessionBookingField';

type BookSessionContainerProps = RouteComponentProps<any> & {}

const BookSessionContainer:React.FunctionComponent<BookSessionContainerProps> = (props) => {
    let needsHelpWithInitialState = {
        bookingAnswer1: false, 
        bookingAnswer2: false, 
        bookingAnswer3: false, 
        bookingAnswer4: false, 
        bookingAnswer5: false, 
        bookingAnswer6: false, 
        bookingAnswer7: false, 
    }

    let initialState = props.location.state.eventData;
    let isCurrentBooking = props.location.state.isCurrentBooking; 
    let booking = isCurrentBooking ? initialState.currentBooking : initialState.waitingList[initialState.waitingList.length];

    let initialBookingState = {
        studentId: '',
        reason: '',
        subjectName: '',
        assignmentType: '',
        isGroupAssignment: false,
        additionalHelpDetails: '',
        needsHelpWithOptions: needsHelpWithInitialState 
    }

    if (booking) {
        let { reason, studentId, subjectName, assignmentType, isGroupAssignment, needsHelpWithOptions, additionalHelpDetails } = booking;
        initialBookingState = {
            ...initialBookingState,
            studentId,
            reason,
            subjectName,
            assignmentType,
            isGroupAssignment,
            needsHelpWithOptions,
            additionalHelpDetails,
        };
    }

    // Contains data for the current booking
    const [bookingState, setBookingState] = React.useState(initialBookingState);
    const [additionalChecks, setAdditionalChecks] = React.useState({
        emailStudent: false,
        emailAdmin: false,
        checkRule: false
    });

    const handleChange = (key: string) => (event: any) => {
        setBookingState({
            ...bookingState,
            [key]: event.target.value
        });
    }

    const handleHelpOptionsChange = (id: string) => (event: any) => {
        // event.target.value is being passed as a string for whatever reason
        const parsedVal = event.target.value === 'false';
        setBookingState({
            ...bookingState,
            needsHelpWithOptions: {
                ...bookingState.needsHelpWithOptions,
                [id]: parsedVal
            }
        })
    }

    const handleAdditionalOptionsChange = (id: string) => (event: any) => {
        // event.target.value is being passed as a string for whatever reason
        const parsedVal = event.target.value === 'false';
        setAdditionalChecks({
            ...additionalChecks,
            [id]: parsedVal
        });
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        let tempData = {};
        if (isCurrentBooking) {
            tempData = {
                ...initialState,
                currentBooking: {
                    ...bookingState,
                    additionalOptions: additionalChecks
                },
                isCurrentBooking: true
            }
        } else {
            tempData = {
                ...initialState,
                waitingList: [
                    ...initialState.waitingList,
                    {...bookingState}
                ],
                isCurrentBooking: false
            }
        }
        console.log(tempData);
        try {
            //@ts-ignore
            await bookSession(tempData);
            // TODO: Change alert to using a toast message or something
            alert('successfully updated booking');
            props.history.push('/admin/sessions');
        } catch(err) {
            // TODO: Change alert to using a toast message or something
            alert('An error occurred when booking');
            console.log('An error occurred when booking session', err);
        }
    }

    return (
        <div style={{ margin: '0 5%' }}>
            <Typography variant="h2">Book ISession</Typography>
            <TextLockup label="Date:" value={initialState.date}/>
            <TextLockup label="Advisor:" value={initialState.advisor}/>
            <TextLockup label="Time:" value={`${initialState.startTime} - ${initialState.endTime}`}/>
            <TextLockup label="Campus:" value={initialState.room} />
            <TextLockup label="Type:" value={initialState.type}/>
            <form onSubmit={handleSubmit}>
                <SessionBookingField id="studentId" title="Student ID" value={bookingState.studentId} handleChange={handleChange} />
                <SessionBookingField id="reason" title="This appointment is for..." value={bookingState.reason} handleChange={handleChange} />
                <SessionBookingField id="subjectName" title="Subject Name" value={bookingState.subjectName} handleChange={handleChange} />
                <SessionBookingField id="assignmentType" title="Assignment Type" value={bookingState.assignmentType} handleChange={handleChange} />
                <FormGroup>
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer1} id="bookingAnswer1" label="Answering the assignment question (please provide the question to your advisor)" handleCheckboxChange={handleHelpOptionsChange}/>
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer2} id="bookingAnswer2" label="Addressing the marking criteria (please provide the criteria to your advisor)" handleCheckboxChange={handleHelpOptionsChange}/>
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer3} id="bookingAnswer3" label="Structure" handleCheckboxChange={handleHelpOptionsChange}/>
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer4} id="bookingAnswer4" label="Paragraph development" handleCheckboxChange={handleHelpOptionsChange}/>
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer5} id="bookingAnswer5" label="Referencing" handleCheckboxChange={handleHelpOptionsChange}/>
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer6} id="bookingAnswer6" label="Grammar" handleCheckboxChange={handleHelpOptionsChange}/>
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer7} id="bookingAnswer7" label="Other, please specify below" handleCheckboxChange={handleHelpOptionsChange}/>
                </FormGroup>
                <SessionBookingField id="additionalHelpDetails" title="Specify any additional details here" value={bookingState.additionalHelpDetails} handleChange={handleChange} />
                <Button id="submitBooking" color="primary" size="large" type="submit">Book ISession</Button>
            </form>
            <FormGroup>
                <CheckboxOption value={additionalChecks.emailStudent} id="emailStudent" label="Send email to student" handleCheckboxChange={handleAdditionalOptionsChange} />
                <CheckboxOption value={additionalChecks.emailAdmin} id="emailAdmin" label="Send email to lecturer" handleCheckboxChange={handleAdditionalOptionsChange} />
                <CheckboxOption value={additionalChecks.checkRule} id="checkRule" label="Check rule" handleCheckboxChange={handleAdditionalOptionsChange} />
            </FormGroup>
            <div>
                <Typography variant="body1">Rule</Typography>
                <Typography variant="body1">- A session must be booked/cancelled/put into the waiting list at least 24 hours before appointment</Typography>
                <Typography variant="body1">- A student can only be put into the waiting list for the max 3 sessions for the week</Typography>
                <Typography variant="body1">- Student cannot make appoitnments for 1 year after 2nd no-show</Typography>
                <Typography variant="body1">- Student can book for up to 1 session per week</Typography>
                <Typography variant="body1">- Student can book for up to 3 sessions in advance</Typography>
            </div>
        </div>
    );
}

export default withRouter(BookSessionContainer);