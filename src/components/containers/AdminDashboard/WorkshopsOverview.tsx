import * as React from 'react';
import { getCurrentWorkshops, getArchivedWorkshops } from './../../../logic/functions/getAvailableWorkshops';
import { Workshop } from '../../../logic/domains/workshopDetails.domain';
import EditableTable, { EditOptions } from '../../presentational/EditableTable';
import { Add } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

export interface WorkshopOverviewProps {
    tab: string
}

const icons = {
    Add: () => <Add /> as React.ReactElement<SvgIconProps>
}

const WorkshopOverview: React.SFC<WorkshopOverviewProps> = ({ tab }) => {
    const editOptions = {
        canAdd: true,
        canUpdate: true,
        canDelete: true
    } as EditOptions;

    const [state, setState] = React.useState({});

    const renderWaitingList = () => {
        return <Button color="primary" variant="outlined">Details</Button>
    }

    React.useEffect(() => {
        if (tab) {
            async function callGetWorkshops() {
                let details = null
                if (tab === "Current") {
                    details = await getCurrentWorkshops();
                } else {
                    details = await getArchivedWorkshops();
                }

                setState({
                    columns: [
                        { title: 'No', field: 'no' },
                        { title: 'Skill-Set', field: 'skillSet' },
                        { title: 'Short Title', field: 'shortTitle' },
                        { title: 'Details', field: 'details', editable: 'never', render: (rowData: "Test") => <div>{renderWaitingList()}</div> },
                        // { title: 'Room', field: 'room' },
                        // { title: 'A/NA', field: '' },
                        // { title: 'Type', field: 'type' },
                        // { title: 'Booked by', field: 'studentId', editable: 'never', render: (rowData: Workshop) => <td>{displayStudentId(rowData)}</td> },
                        // { title: 'Waiting', field: 'waitingList', render: (rowData: Workshop) => <td>{renderWaitingList(rowData)}</td> },
                    ],
                    data: details.map((Workshop: Workshop) => {
                        return Workshop;
                    })
                });
            }
            callGetWorkshops();
        }
    }, [tab]);

    return (
        <div>
            <br />
            <br />
            <EditableTable state={state} setState={setState}
                options={{ paging: false }} editOptions={editOptions} title={'Workshop'} />
        </div>
    );
}

export default WorkshopOverview;