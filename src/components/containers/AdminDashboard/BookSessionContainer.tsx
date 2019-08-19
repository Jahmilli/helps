import * as React from 'react';
import { Typography, Box, FormControl, InputLabel, Input, FormGroup, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Close from '@material-ui/icons/Close';
import TextLockup from '../../presentational/TextLockup';
import SessionBookingFields from '../__data__/data.sessionBooking.json';
import { Session, NeedsHelpWith } from '../../../logic/domains/sessionDetails.domain';
import SessionBookingCheckboxFields from '../__data__/data.sessionBookingCheckboxFields.json';
import bookSession from '../../../logic/functions/bookSession'; 

type BookSessionContainerProps = RouteComponentProps<any> & {}

type CheckBoxField = {
    id: string;
    label: string;
}

const BookSessionContainer:React.FunctionComponent<BookSessionContainerProps> = (props) => {
    console.log(props.location.state);

    // Add keys to object
    let needsHelpWithIDs: NeedsHelpWith = {};
    for (let field of SessionBookingCheckboxFields) {
        let newId = field.id;
        needsHelpWithIDs[newId] = false;
    }

    // TODO: Setting these to '' and false is a problem. Need to determine whether we set these values when we create a session (either from front or backend)
    let initialState: Session = {...props.location.state.eventData,  reason: '', subjectName: '', assignmentType: '', isGroupAssignment: false, needsHelpWith: needsHelpWithIDs};
    const [sessionData, setSessionData] = React.useState<Session>(initialState);

    const handleChange = (name: string) => (event: any) => {
        setSessionData({
            ...sessionData,
            [name]: event.target.value
        });
    }

    const handleCheckboxChange = (name: string) => (event: any) => {
        const data: Session = sessionData;
        data.needsHelpWith[name] = event.target.checked;
        setSessionData(data);
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            let response = await bookSession(sessionData);
            console.log('response from book session is ', response)
            alert('successfully updated booking');
        } catch(err) {
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
            <form onSubmit={(event) => handleSubmit(event)}>
                {SessionBookingFields.map((field: any, index: number) => {
                    return (
                    <FormControl key={index} fullWidth={true}>
                    <InputLabel htmlFor={`${field.id}-field`}>{field.title}</InputLabel>
                    <Input 
                        aria-describedby={`${field.id}-field`} 
                        id={field.id}
                        onChange={handleChange(field.id)}
                        value={sessionData[field.id]}
                    />
                    </FormControl>
                    );
                })}
                <FormControl component="fieldset">
                    <FormGroup>
                        {SessionBookingCheckboxFields.map((field: CheckBoxField) => {
                           return (
                            <FormControlLabel
                                key={field.id}
                                value={field.id}
                                control={<Checkbox color="primary" onChange={handleCheckboxChange(field.id)}/>}
                                label={field.label}
                                labelPlacement="end"
                                />
                           );
                        })}
                    </FormGroup>
                </FormControl>
                <Button id="submitBooking" color="primary" size="large" type="submit">Book Session</Button>
            </form>
        </div>
    );
}

export default withRouter(BookSessionContainer);