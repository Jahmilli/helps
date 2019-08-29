import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import EditableTable, { EditOptions } from '../EditableTable';
import { Add } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

const icons = {
    Add: () => <Add /> as React.ReactElement<SvgIconProps>
}

type AvailableSessionsProps = RouteComponentProps<any> & {
    sessionData: Array<ISession>;
    isAdmin: boolean;
}

const AvailableSessions: React.FunctionComponent<AvailableSessionsProps> = (props) => {
    const BOOK_SESSION = 'Book this session';
    const BOOKED = 'Booked';
    const editOptions = {
        canUpdate: true,
        canDelete: true
    } as EditOptions;

    const [state, setState] = React.useState({});

    const displayStudentId = (session: ISession) => {
        if (session.currentBooking === undefined) {
            return BOOK_SESSION;
        }
        return props.isAdmin ? session.currentBooking.studentId : BOOKED;
    }

    const renderWaitingList = (session: ISession) => {
        if (session.waitingList.length === 0) {
            return <Button onClick={addToWaitingList(session)}>Add</Button>
        }
        return <Button onClick={addToWaitingList(session)}>{session.waitingList.length} Student(s)</Button>
    }

    React.useEffect(() => {
        if (props.sessionData) {
            setState({
                columns: [
                    { title: 'Date', field: 'date' },
                    { title: 'Start Time', field: 'startTime' },
                    { title: 'End Time', field: 'endTime' },
                    { title: 'Room', field: 'room' },
                    // { title: 'A/NA', field: '' },
                    { title: 'Type', field: 'type' },
                    { title: 'Booked by', field: 'studentId', editable: 'never', render: (rowData: ISession) => <div>{displayStudentId(rowData)}</div> }, 
                    { title: 'Waiting', field: 'waitingList', editable: 'never', render: (rowData: ISession) => <div>{renderWaitingList(rowData)}</div> }, 
                ],
                data: props.sessionData.map((session: ISession) => session)
            });
        }
    }, [props.sessionData]);

    const addToWaitingList = (eventData: ISession) => (event: React.MouseEvent) => {
        props.history.push({
            pathname: `/admin/bookSession`,
            state: {
                eventData,
                isCurrentBooking: false
            }
        });
    }

    const handleBookSession = (eventData: ISession) => {
        // Navigate to a different page with the event data passed in
        // if (eventData.studentId !== BOOK_SESSION) {
        //     alert('This session is already booked');
        // } else {
            console.log(eventData);
            // Maybe we can use Redirect and control its rendering from here
            props.history.push({
                pathname: `/admin/bookSession`,
                state: {
                    eventData,
                    isCurrentBooking: true
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
                    onClick: (event: any, rowData: ISession) => handleBookSession(rowData)
                }
            ]}
            options={{ toolbar: false, paging: true }} editOptions={editOptions} />
        </div>
    );
};
    

export default withRouter(AvailableSessions);