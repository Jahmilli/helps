import * as React from 'react';
import { Typography, Box, FormControl, InputLabel, Input, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Close from '@material-ui/icons/Close';
import TextLockup from '../../presentational/TextLockup';
import SessionBookingFields from '../__data__/data.sessionBooking.json';
import { Session } from '../../../logic/domains/sessionDetails.domain';
import SessionBookingCheckboxFields from '../__data__/data.sessionBookingCheckboxFields.json';

// Your component own properties
type BookSessionContainerProps = RouteComponentProps<any> & {
    // someString?: string,
}

const BookSessionContainer:React.FunctionComponent<BookSessionContainerProps> = (props) => {
    console.log(props.location.state);
    let initialState: Session = {...props.location.state.eventData,  reason: '', subjectName: '', assignmentType: '', isGroupAssignment: false, needsHelpWith: []};
    const [sessionData, setSessionData] = React.useState<Session>(initialState);

    const handleChange = (name: string) => (event: any) => {
        setSessionData({
            ...sessionData,
            [name]: event.target.value
        });
    }

    return (
        <div style={{ margin: '0 5%' }}>
            <Typography variant="h2">Book Session</Typography>
            <TextLockup label="Date:" value={sessionData.date}/>
            <TextLockup label="Advisor:" value={sessionData.advisor}/>
            <TextLockup label="Time:" value={`${sessionData.startTime} - ${sessionData.endTime}`}/>
            <TextLockup label="Campus:" value={sessionData.room} />
            <TextLockup label="Type:" value={sessionData.type}/>
            <form>
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
                        {SessionBookingCheckboxFields.map((field: any, index: number) => {
                           return (
                            <FormControlLabel
                                value={index}
                                control={<Checkbox color="primary" />}
                                label={field.label}
                                labelPlacement="end"
                                />
                           );
                        })}
                    </FormGroup>
                </FormControl>
                <Close onClick={() => console.log(sessionData)} />
            </form>
        </div>
    );
}

export default withRouter(BookSessionContainer);