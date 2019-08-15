import * as React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router';
import Navbar from '../common/Navbar';
import logo from '../../images/uts-logo.png';
import Footer from '../common/Footer';
import StudentRegistrationContainer from '../containers/StudentDashboard/StudentRegistrationContainer';
import navbarTabs from './__data__/data.studentNavbarTabs.json';
import Auth from '../../logic/functions/core/Auth';
import LoginPage from './LoginPage';

interface StudentHomePageProps {
    auth: Auth;
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

const StudentHomePage: React.FunctionComponent<StudentHomePageProps> = ({ auth, path }) => {
    const classes = useStyles();

    return (
        <div>
            <Navbar auth={auth} path={path} navbarTabs={navbarTabs}>
                <img src={logo} className={classes.logo} alt="UTS Logo" />
                <Typography variant="h2">UTS: HELPS</Typography>
            </Navbar>
            <div>
                <Route path={`${path}/login`} render={() => <LoginPage auth={auth} /> } />
                <Route path={`${path}/registration`} render={() => <StudentRegistrationContainer /> } />
                <Route path={`${path}/myInformation`} component={() => <h1>My Information</h1>} />
                <Route path={`${path}/myBookings`} component={() => <h1>My Bookings</h1>} />
                <Route path={`${path}/workshopRegistration`} component={() => <h1>Workshop Registration</h1>} />
                <Route path={`${path}/programs`} component={() => <h1>Programs</h1>} />
                <Route path={`${path}/faq`} component={() => <h1>FAQ</h1>} />
                <Route path={`${path}/exit`} component={() => <h1>Exit</h1>} />
            </div>
            <Footer />
        </div>
    );
};

export default StudentHomePage;