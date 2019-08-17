import * as React from 'react';
import { Typography } from '@material-ui/core';
import { getAvailableSessions } from '../../../logic/functions/getAvailableSessions';
import { Session } from '../../../logic/domains/sessionDetails.domain';
import EditableTable from '../../presentational/EditableTable';

interface AvailableSessionsContainer {
};


const AvailableSessionsContainer: React.FunctionComponent<AvailableSessionsContainer> = () => {
    const [state, setState] = React.useState({});

    React.useEffect(() => {
        async function callGetSessions() {
            const details = await getAvailableSessions();
            console.log('details', details);
            setState({
                columns: [
                  { title: 'Date', field: 'date' },
                  { title: 'Start Time', field: 'startTime' },
                  { title: 'End Time', field: 'endTime' },
                  { title: 'Room', field: 'room' },
                  // { title: 'A/NA', field: '' },
                  { title: 'Type', field: 'type' },
                  { title: 'Booked by', field: 'booked by' }, 
                //   { title: 'Waiting', field: 'waiting' }, 
                ],
                data: details.map((session: Session, index: number) => {
                    return session;
                })
              });
        }
        callGetSessions();
    }, []);

    return (
        <div>
            <Typography variant="h2">Sessions available</Typography>
            <EditableTable state={state} setState={setState} options={{ toolbar: false, paging: false }}/>
        </div>
    );
};
    

export default AvailableSessionsContainer;