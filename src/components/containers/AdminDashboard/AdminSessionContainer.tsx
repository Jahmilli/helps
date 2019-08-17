import * as React from 'react';
import TopTabs from '../../presentational/AdminDashboard/TopTabs';
import AvailableSessionsContainer from './AvailableSessionsContainer';

interface AdminSessionContainerProps {
};

const AdminSessionContainer: React.FunctionComponent<AdminSessionContainerProps> = () => {
    return (
        <div style={{ margin: '0 5%' }}>
            <TopTabs />
            <AvailableSessionsContainer />
        </div>
    );
};
    

export default AdminSessionContainer;