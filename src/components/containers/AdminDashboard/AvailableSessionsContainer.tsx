import * as React from 'react';
import CustomizedTables, { StyledTableRow, StyledTableCell } from '../../presentational/Table';
import { Typography } from '@material-ui/core';
import { getAvailableSessions } from '../../../logic/functions/getAvailableSessions';
import { Session } from '../../../logic/domains/sessionDetails.domain';

interface AvailableSessionsContainer {
};

// Column headings in the table used in this component
const headRows = ["Date", "Start Time", "End Time", "Room", "Type", "Booked by", "Booked By"];
const AvailableSessionsContainer: React.FunctionComponent<AvailableSessionsContainer> = () => {
    // const initialState = [] as Array<Session>;
    const [ sessions, setSessions ] = React.useState<Array<Session>>([]);

    React.useEffect(() => {
        async function callGetSessions() {
            const details = await getAvailableSessions();
            console.log('details', details);
            setSessions(details);
        }
        callGetSessions();
    }, []);
    return (
        <div>
            <Typography variant="h2">Sessions available</Typography>
            <CustomizedTables headRows={headRows}>
                {sessions.map((session: Session) => {
                    return (
                        <StyledTableRow key={session.id}>
                            <StyledTableCell component="th" scope="row">
                                {session.date}
                            </StyledTableCell>
                            <StyledTableCell>{session.startTime}</StyledTableCell>
                            <StyledTableCell>{session.endTime}</StyledTableCell>
                            <StyledTableCell>{session.room}</StyledTableCell>
                            <StyledTableCell>{session.advisor}</StyledTableCell>
                            <StyledTableCell>{session.bookedBy}</StyledTableCell>
                            <StyledTableCell>{session.type}</StyledTableCell>
                        </StyledTableRow> 
                    )
                })}
            </CustomizedTables>
        </div>
    );
};
    

export default AvailableSessionsContainer;