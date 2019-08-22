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

type AvailableSessionsContainerProps = RouteComponentProps<any> & {
    isAdmin: boolean;
}

const AvailableSessionsContainer: React.FunctionComponent<AvailableSessionsContainerProps> = (props) => {
    console.log('props are ', props);
    const BOOK_SESSION = 'Book this session';
    const BOOKED = 'Booked';
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
                data: details.map((session: Session) => {
                    // if (session.currentBooking && session.currentBooking.studentId && !props.isAdmin) {
                    //     // session.currentBooking.studentId = BOOKED;
                    // } else if (session.currentBooking && !session.currentBooking.studentId || session.currentBooking.studentId.length === 0) {
                    //     session.currentBooking.studentId = BOOK_SESSION
                    // }
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
            console.log(eventData);
            props.history.push({
                pathname: `/admin/bookSession`,
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