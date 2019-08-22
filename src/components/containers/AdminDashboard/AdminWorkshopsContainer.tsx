import * as React from 'react';
import TopTabs from '../../presentational/AdminDashboard/TopTabs';

export interface AdminWorkshopsContainerProps {
    props: any
}
 
const AdminWorkshopsContainer: React.SFC<AdminWorkshopsContainerProps> = ({ props }) => {
    const { path } = props.match
    return ( 
        <div>
        </div>
     );
}
 
export default AdminWorkshopsContainer;