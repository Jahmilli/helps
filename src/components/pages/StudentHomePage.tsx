import * as React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router';
import StudentNavbar from '../presentational/StudentDashboard/StudentNavbar';
import logo from '../../images/uts-logo.png';
import StudentFooter from '../presentational/StudentDashboard/StudentFooter';
import StudentRegistrationContainer from '../containers/StudentDashboard/StudentRegistrationContainer';

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
            <div>
                <Route path={`${path}/registration`} render={() => <StudentRegistrationContainer /> } />
                <Route path={`${path}/exit`} component={() => <h1>HI</h1>} />
                <Route path={`${path}/programs`} component={() => <h1>Hello</h1>} />
                <Route path={`${path}/faq`} component={() => <h1>Chow</h1>} />
            </div>
            <StudentFooter />
        </div>
    );
};

export default StudentHomePage;