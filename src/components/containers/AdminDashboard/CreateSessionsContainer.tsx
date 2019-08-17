import * as React from 'react';
import CustomizedTables, { StyledTableRow, StyledTableCell } from '../../presentational/Table';
import { Typography, TextField } from '@material-ui/core';
import { Session } from '../../../logic/domains/sessionDetails.domain';
import EditableTable from '../../presentational/EditableTable';
import Close from '@material-ui/icons/Close';


interface CreateSessionsContainerProps {
};

// Column headings in the table used in this component
const CreateSessionsContainer: React.FunctionComponent<CreateSessionsContainerProps> = () => {
    const [ sessions, setSessions ] = React.useState<Array<Session>>([new Session()]);

    const headRows = ["Date", "Start Time", "End Time", "Room", "A/NA", "Type", "", ""];
    const [state, setState] = React.useState({
      columns: [
        { title: 'Date', field: 'date' },
        { title: 'Start Time', field: 'startTime' },
        { title: 'End Time', field: 'endTime' },
        { title: 'Room', field: 'room' },
        // { title: 'A/NA', field: '' },
        { title: 'Type', field: 'type' },
        
      ],
      data: [
        { date: '', startTime: '', endTime: '', room: '', type: '' }
      ],
    });

    React.useEffect(() => {
        async function callGetSessions() {
        }
        // callGetSessions();
    }, []);

    return (
        <div>
            <Typography variant="body1">
                To add sessions, please enter their details below and 
                click "Add". If you do not wish to add a session that you have selected a date & 
                time for, please click "Clear" next to that session before adding.
            </Typography>
            <Typography variant="body1">
                Please note: all the fields are compulsory, otherwise 
                that session will not be added.
            </Typography>
            <EditableTable state={state} setState={setState} options={{ paging: false }}/>
            <Close onClick={() => console.log(state)} />
        </div>
    );
};
    

export default CreateSessionsContainer;