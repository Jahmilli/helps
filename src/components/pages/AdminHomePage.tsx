import * as React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router';
import Navbar, { NavbarTab } from '../common/Navbar';
import logo from '../../images/uts-logo.png';
import Footer from '../common/Footer';
import Auth from '../../logic/functions/core/Auth';
import LoginPage from './LoginPage';
import WaitingList from './WaitingList';
import navbarTabs from './__data__/data.adminNavbarTabs.json';
import AdminSessionContainer from '../containers/AdminDashboard/AdminSessionContainer';
import BookSessionContainer from '../containers/AdminDashboard/BookSessionContainer';

interface AdminHomePageProps {
    auth: Auth;
    props: any;
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

const AdminHomePage: React.FunctionComponent<AdminHomePageProps> = ({ auth, props }) => {
    const classes = useStyles();
    const { path } = props.match;
    return (
        <div>
            <Navbar auth={auth} path={path} navbarTabs={navbarTabs as Array<NavbarTab>}>
                <img src={logo} className={classes.logo} alt="UTS Logo" />
                <Typography variant="h2">UTS: HELPS</Typography>
            </Navbar>
            <div>
                <Route path={`${path}/login`} render={() => <LoginPage auth={auth} /> } />
                <Route path={`${path}/sessions`} render={(props) => <AdminSessionContainer {...props} /> } />
                <Route path={`/admin/bookSession`} render={(props) => <BookSessionContainer /> } />
                <Route path={`${path}/waitingList`} render={(props) => <WaitingList/> } />
            </div>
            <Footer />
        </div>
    );
};

export default AdminHomePage;