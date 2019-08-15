import * as React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router';
import Navbar from '../common/Navbar';
import logo from '../../images/uts-logo.png';
import Footer from '../common/Footer';
import Auth from '../../logic/functions/core/Auth';
import LoginPage from './LoginPage';
import navbarTabs from './__data__/data.adminNavbarTabs.json';

interface AdminHomePageProps {
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

const AdminHomePage: React.FunctionComponent<AdminHomePageProps> = ({ auth, path }) => {
    const classes = useStyles();

    return (
        <div>
            <Navbar auth={auth} path={path} navbarTabs={navbarTabs}>
                <img src={logo} className={classes.logo} alt="UTS Logo" />
                <Typography variant="h2">UTS: HELPS</Typography>
            </Navbar>
            <div>
                <Route path={`${path}/login`} render={() => <LoginPage auth={auth} /> } />
            </div>
            <Footer />
        </div>
    );
};

export default AdminHomePage;