import * as React from 'react';
import WorkshopsOverview from "./WorkshopsOverview"

export interface AdminWorkshopsContainerProps {
    props: any
}

const AdminWorkshopsContainer: React.SFC<AdminWorkshopsContainerProps> = ({ props }) => {
    const { path } = props.match
    return (
        <div>
            <WorkshopsOverview />
        </div>
    );
}

export default AdminWorkshopsContainer;