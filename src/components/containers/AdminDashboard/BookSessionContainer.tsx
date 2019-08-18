import * as React from 'react';
import { Typography, Box, FormControl, InputLabel, Input, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import TextLockup from '../../presentational/TextLockup';
import SessionBookingFields from '../__data__/data.sessionBooking.json';
import { Session, ISession } from '../../../logic/domains/sessionDetails.domain';

// Your component own properties
type BookSessionContainerProps = RouteComponentProps<any> & {
    // someString?: string,
}

const BookSessionContainer:React.FunctionComponent<BookSessionContainerProps> = (props) => {
    console.log(props.location.state);
    const initialState: ISession = props.location.state.eventData;
    const newSession = new Session(initialState);

    console.log('initialstate is ', initialState);
    const [sessionData, setSessionData] = React.useState<ISession>(newSession);

    const handleChange = (name: string) => (event: any) => {
        const data = sessionData;
        data[name] = event.target.value;
        setSessionData({...sessionData});
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

                {/* <FormControl component="fieldset">
                    <FormGroup aria-label="position" value="" row>
                        <FormControlLabel
                        value="top"
                        control={<Checkbox color="primary" />}
                        label="Top"
                        labelPlacement="top"
                        />
                    </FormGroup>
                </FormControl> */}
            </form>
        </div>
    );
}

export default withRouter(BookSessionContainer);