import * as React from 'react';
import { Typography } from '@material-ui/core';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import EditableTable from '../EditableTable';
import { Add } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';


const icons = {
    Add: () => <Add /> as React.ReactElement<SvgIconProps>
}

interface StudentSessionsTableProps {
    data: Array<ISession>;
}

const StudentSessionsTable: React.FunctionComponent<StudentSessionsTableProps> = ({ data }) => {
    const [state, setState] = React.useState({});
    
    React.useEffect(() => {
        if (data) {
            setState({
                columns: [
                    { title: 'Date', field: 'date' },
                    { title: 'Time', field: 'startTime' },
                    { title: 'Room', field: 'room' },
                    // { title: 'A/NA', field: '' },
                    { title: 'Advisor', field: 'advisor' },
                    { title: 'Type', field: 'type' },
                ],
                data: data.map((session: ISession) => session)
            });
        }
    }, [data]);

    return (
        <div>
            <Typography variant="h2">Sessions available</Typography>
            <EditableTable state={state} setState={setState} actions={[{
                    icon: icons.Add,
                    tooltip: 'Book Session',
                    onClick: (event: any, rowData: ISession) => console.log(rowData)
                }
            ]}
            options={{ toolbar: false, paging: false }}/>
        </div>
    );
};
    

export default StudentSessionsTable;