import * as React from 'react';
import { Typography, Box, FormControl, InputLabel, Input, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Close from '@material-ui/icons/Close';
import TextLockup from '../../presentational/TextLockup';
import SessionBookingFields from '../__data__/data.sessionBooking.json';
import { Session, NeedsHelpWith } from '../../../logic/domains/sessionDetails.domain';
import SessionBookingCheckboxFields from '../__data__/data.sessionBookingCheckboxFields.json';

// Your component own properties
type BookSessionContainerProps = RouteComponentProps<any> & {
    // someString?: string,
}

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
        data.needsHelpWith[name] = !event.target.value;
        setSessionData(data);
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
                <Close onClick={() => console.log(sessionData)} />
            </form>
        </div>
    );
}

export default withRouter(BookSessionContainer);