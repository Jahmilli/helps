import * as React from 'react';
import { Typography, FormGroup, Button, Checkbox } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import TextLockup from '../../presentational/TextLockup';
import { Session } from '../../../logic/domains/sessionDetails.domain';
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

    // TODO: Setting these to '' and false is a problem. Need to determine whether we set these values when we create a session (either from front or backend)
    let initialState: Session = {...props.location.state.eventData };
    console.log('initial state is ', initialState);
    if (initialState.currentBooking) {
        let { reason, studentId, subjectName, assignmentType, isGroupAssignment, needsHelpWithOptions, additionalHelpDetails } = initialState.currentBooking;
        initialState = {
            ...initialState, 
            currentBooking: {
                studentId,
                reason,
                subjectName,
                assignmentType,
                isGroupAssignment,
                additionalHelpDetails,
                needsHelpWithOptions
            }
        };
        console.log('here', initialState);
    } else {
        initialState = {
            ...initialState,
            currentBooking: {
                studentId: '',
                reason: '',
                subjectName: '',
                assignmentType: '',
                isGroupAssignment: false,
                additionalHelpDetails: '',
                needsHelpWithOptions: needsHelpWithInitialState 
            }
        }
    }
    
    const bookingInitialState = initialState.currentBooking;
   
    // Contains data for the overall session
    const [sessionData, setSessionData] = React.useState<Session>(initialState);
    // Contains data for the current booking
    const [bookingState, setBookingState] = React.useState(bookingInitialState);
    const [additionalChecks, setAdditionalChecks] = React.useState({
        emailStudent: false,
        emailAdmin: false,
        checkRule: false
    });
    console.log('session data ', sessionData);
    console.log('bookingstate ', bookingState);
      
      const handleChange = (key: string) => (event: any) => {
          const data = sessionData;
          setBookingState({
              ...bookingState,
              [key]: event.target.value
            });
        }

    const handleHelpOptionsChange = (id: string) => (event: any) => {
        console.log(event.target.value);
        const parsedVal = event.target.value == 'false';
        console.log(parsedVal);
        // console.log('state is ', additionalChecks[id]);
        setBookingState({
            ...bookingState,
            needsHelpWithOptions: {
                ...bookingState.needsHelpWithOptions,
                [id]: parsedVal
            }
        })
        console.log(bookingState.needsHelpWithOptions);
    }

    const handleAdditionalOptionsChange = (id: string) => (event: any) => {
        console.log(event.target.value);
        const parsedVal = event.target.value == 'false';
        console.log(parsedVal);
        //@ts-ignore
        console.log('state is ', additionalChecks[id]);
        setAdditionalChecks({
            ...additionalChecks,
            [id]: parsedVal
        });
        console.log(additionalChecks);
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setSessionData({
            ...sessionData,
            currentBooking: bookingState,
        })
        console.log(sessionData);
        let tempData = {
            ...sessionData,
            currentBooking: {
                ...bookingState,
                additionalOptions: additionalChecks
            }
        }
        console.log('temp data is ', tempData);
        console.log('additional checks', additionalChecks);
        try {
            await bookSession(tempData);
            alert('successfully updated booking');
            props.history.push('/admin/sessions');
        } catch(err) {
            alert('An error occurred when booking');
            console.log('An error occurred when booking session', err);
        }
    }

    return (
        <div style={{ margin: '0 5%' }}>
            <Typography variant="h2">Book Session</Typography>
            <TextLockup label="Date:" value={sessionData.date}/>
            <TextLockup label="Advisor:" value={sessionData.advisor}/>
            <TextLockup label="Time:" value={`${sessionData.startTime} - ${sessionData.endTime}`}/>
            <TextLockup label="Campus:" value={sessionData.room} />
            <TextLockup label="Type:" value={sessionData.type}/>
                  
            <form onSubmit={handleSubmit}>
                <SessionBookingField id="studentId" title="Student ID" value={bookingState.studentId} handleChange={handleChange} />
                <SessionBookingField id="reason" title="This appointment is for..." value={bookingState.reason} handleChange={handleChange} />
                <SessionBookingField id="subjectName" title="Subject Name" value={bookingState.subjectName} handleChange={handleChange} />
                <SessionBookingField id="assignmentType" title="Assignment Type" value={bookingState.assignmentType} handleChange={handleChange} />
                <FormGroup>
                    {/* <CheckboxOption value={needsHelpWithState.bookingAnswer1} id={"bookingAnswer1"} label="Answering the assignment question (please provide the question to your advisor)" handleCheckboxChange={handleHelpOptionsChange}/> */}
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer1} id="bookingAnswer1" label="Answering the assignment question (please provide the question to your advisor)" handleCheckboxChange={handleHelpOptionsChange}/>
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer2} id="bookingAnswer2" label="Addressing the marking criteria (please provide the criteria to your advisor)" handleCheckboxChange={handleHelpOptionsChange}/>
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer3} id="bookingAnswer3" label="Structure" handleCheckboxChange={handleHelpOptionsChange}/>
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer4} id="bookingAnswer4" label="Paragraph development" handleCheckboxChange={handleHelpOptionsChange}/>
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer5} id="bookingAnswer5" label="Referencing" handleCheckboxChange={handleHelpOptionsChange}/>
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer6} id="bookingAnswer6" label="Grammar" handleCheckboxChange={handleHelpOptionsChange}/>
                    <CheckboxOption value={bookingState.needsHelpWithOptions.bookingAnswer7} id="bookingAnswer7" label="Other, please specify below" handleCheckboxChange={handleHelpOptionsChange}/>
                </FormGroup>
                <SessionBookingField id="additionalHelpDetails" title="Specify any additional details here" value={bookingState.additionalHelpDetails} handleChange={handleChange} />
                <Button id="submitBooking" color="primary" size="large" type="submit">Book Session</Button>
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