import * as React from 'react';
import { Typography } from '@material-ui/core';
import { getAvailableSessions } from '../../../logic/functions/getAvailableSessions';
import { Session } from '../../../logic/domains/sessionDetails.domain';
import EditableTable from '../../presentational/EditableTable';
import { Add } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

const icons = {
    Add: () => <Add /> as React.ReactElement<SvgIconProps>
}

type AvailableSessionsContainerProps = RouteComponentProps<any> & {}

const AvailableSessionsContainer: React.FunctionComponent<AvailableSessionsContainerProps> = (props) => {
    console.log('props are ', props);
    const BOOK_SESSION = 'Book this session';
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
                  { title: 'Booked by', field: 'studentId', editable: 'never' }, 
                //   { title: 'Waiting', field: 'waiting' }, 
                ],
                data: details.map((session: Session, index: number) => {
                    if (!session.studentId || session.studentId.length === 0) {
                        session.studentId = BOOK_SESSION
                    }
                    return session;
                })
              });
        }
        callGetSessions();
    }, []);

    const handleBookSession = (eventData: Session) => {
        // Navigate to a different page with the event data passed in
        // if (eventData.studentId !== BOOK_SESSION) {
        //     alert('This session is already booked');
        // } else {
            props.history.push({
                pathname: `${props.match.path}/bookSession`,
                state: {
                    eventData
                }
            });
        // }
    }

    return (
        <div>
            <Typography variant="h2">Sessions available</Typography>
            <EditableTable state={state} setState={setState} actions={[{
                    icon: icons.Add,
                    tooltip: 'Book Session',
                    onClick: (event: any, rowData: any) => handleBookSession(rowData)
                }
            ]}
            options={{ toolbar: false, paging: false }}/>
        </div>
    );
};
    

export default withRouter(AvailableSessionsContainer);