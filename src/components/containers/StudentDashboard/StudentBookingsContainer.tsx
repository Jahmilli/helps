import React from 'react';
import { Typography } from '@material-ui/core';
import { IStudentDetails } from '../../../logic/domains/studentDetails.domain';
import getCurrentSessions from '../../../logic/functions/getSessionsForStudent';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import StudentSessionsTable from '../../presentational/StudentDashboard/StudentSessions';

interface StudentBookingsContainerProps {

}

const StudentBookingsContainer:React.FunctionComponent<StudentBookingsContainerProps> = () => {
    const [sessions, setSessions] = React.useState<Array<ISession>>([]);
    // const [workshopSessions, setWorkshopSession] = React.useState<any>();

    React.useEffect(() => {
        async function callGetCurrentSessions() {
            try {
                let details = await getCurrentSessions('12345678');
                setSessions(details);
                console.log('sessions are ', details);
            } catch(err) {
                alert('An error occurred when getting current sessions');
            }
        }
        callGetCurrentSessions();
    }, []);

    return (
        <div style={{margin: '0 3%'}}>
            { sessions.length === 0 ? 
            <Typography variant="body1">There are no sessions to display.</Typography> :
            <StudentSessionsTable data={sessions} /> 
            }
            
            <Typography variant="h2">Worshop sessions</Typography>
            <Typography variant="body1">There are no workshop sessions to display.</Typography>
        </div>
    );
}

export default StudentBookingsContainer;