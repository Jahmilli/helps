import * as React from 'react';
import { Typography } from '@material-ui/core';
import { Session } from '../../../logic/domains/sessionDetails.domain';
import EditableTable from '../../presentational/EditableTable';
import Close from '@material-ui/icons/Close';
import { createNewSessions } from '../../../logic/functions/createNewSessions';


interface CreateSessionsContainerProps {};

// Column headings in the table used in this component
const CreateSessionsContainer: React.FunctionComponent<CreateSessionsContainerProps> = () => {
    const [state, setState] = React.useState({
      columns: [
        { title: 'Date', field: 'date' },
        { title: 'Start Time', field: 'startTime' },
        { title: 'End Time', field: 'endTime' },
        { title: 'Room', field: 'room' },
        // { title: 'A/NA', field: '' },
        { title: 'Type', field: 'type' },
        
      ],
      data: [{} as Session],
    });

    React.useEffect(() => {
        async function callGetSessions() {
        }
        // callGetSessions();
    }, []);

    const isEmpty = (str: string): boolean => {
      return (!str || 0 === str.length);
    }
    const validateSessions = (): boolean => {
      for (let session of state.data) {
        if (isEmpty(session.date = '') || (isEmpty(session.startTime) || 
            isEmpty(session.endTime) || isEmpty(session.room) || 
            isEmpty(session.type))) {
            return false;
        }
      }
      return true;
    }

    const submitNewSessions = () => {
      if (validateSessions()) {
        const tempData = state.data as Array<Session>;
        for (let index in state.data) {
          // TODO: Insert advisor id 
          tempData[index] = {...tempData[index], advisor: 'current advisor'}
          // TODO: Splice the table data out
        }
        createNewSessions(tempData)
      } else {
        console.log('sessions were not filled in');
      }
    }

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
            <Close onClick={() => submitNewSessions()} />
        </div>
    );
};
    

export default CreateSessionsContainer;