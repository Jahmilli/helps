import React from 'react';
import { Button } from '@material-ui/core';
import SessionReports from '../../presentational/AdminDashboard/SessionReports';
import WorkshopReports from '../../presentational/AdminDashboard/WorkshopReports';


const ReportsContainer: React.FunctionComponent = () => {
    const [page, setPage] = React.useState(0);
    return (
        <div style={{ margin: '0 5%' }}>
            <div>
                <Button onClick={() => setPage(0)}
                    variant="contained"
                >
                    Session
                </Button>
                <Button onClick={() => setPage(1)}
                    variant="contained"
                >
                    Workshop
                </Button>
                {page === 0 ?
                    <SessionReports />
                    : <WorkshopReports />
                }
            </div>
        </div>
    );
}

export default ReportsContainer;