import * as React from 'react';
import { getAvailableWorkshops } from './../../../logic/functions/getAvailableWorkshops';
import { Workshop } from '../../../logic/domains/workshopDetails.domain';
import EditableTable from '../../presentational/EditableTable';

import { Typography, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export interface WorkshopOverviewProps {

}

const icons = {
    Add: () => <Add /> as React.ReactElement<SvgIconProps>
}

const WorkshopOverview: React.SFC<WorkshopOverviewProps> = (props) => {
    const [state, setState] = React.useState({});

    React.useEffect(() => {
        async function callGetWorkshops() {
            const details = await getAvailableWorkshops();
            console.log('details', details);
            setState({
                columns: [
                    { title: 'Date', field: 'date' },
                    { title: 'Start Time', field: 'startTime' },
                    { title: 'End Time', field: 'endTime' },
                    { title: 'Room', field: 'room' },
                    // { title: 'A/NA', field: '' },
                    { title: 'Type', field: 'type' },
                    // { title: 'Booked by', field: 'studentId', editable: 'never', render: (rowData: Workshop) => <td>{displayStudentId(rowData)}</td> },
                    // { title: 'Waiting', field: 'waitingList', render: (rowData: Workshop) => <td>{renderWaitingList(rowData)}</td> },
                ],
                data: details.map((Workshop: Workshop) => {
                    return Workshop;
                })
            });
        }
        callGetWorkshops();
    }, []);

    return (
        <div>
            <Typography variant="h2">Sessions available</Typography>
            <EditableTable state={state} setState={setState} actions={[{
                icon: icons.Add,
                tooltip: 'Create Workshop',
            }
            ]}
                options={{ toolbar: false, paging: false }} />

        </div>
    );
}

export default WorkshopOverview;