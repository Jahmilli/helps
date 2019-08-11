import * as React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import StudentNavbar from '../presentational/StudentDashboard/StudentNavbar';
import logo from '../../images/uts-logo.png';
import StudentDashboardContainer from '../containers/StudentDashboard/StudentDashboardContainer';
import StudentFooter from '../presentational/StudentDashboard/StudentFooter';

interface StudentHomePageProps {
    path: string;
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    logo: {
        height: '10%',
        width: '10%'
    }
  }));

const StudentHomePage: React.FunctionComponent<StudentHomePageProps> = ({ path }) => {
    const classes = useStyles();

    return (
        <div>
            <img src={logo} className={classes.logo} alt="UTS Logo" />
            <Typography variant="h2">UTS: HELPS</Typography>
            <StudentNavbar path={path} />
            <StudentDashboardContainer path={path} />
            <StudentFooter />
        </div>
    );
};

export default StudentHomePage;