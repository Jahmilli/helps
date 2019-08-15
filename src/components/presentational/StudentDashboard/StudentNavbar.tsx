import * as React from 'react';
import { Paper, Tab, Tabs} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { studentNavbarStyles } from './styles';
import navbarTabs from './__data__/data.studentNavbarTabs.json';
import Auth from '../../../logic/functions/core/Auth.js';

interface StudentNavbarProps {
    auth: Auth;
    path: string;
}

const StudentNavbar: React.FunctionComponent<StudentNavbarProps> = ({ auth, path }) => {
    const classes = studentNavbarStyles();
    const [isAuthenticatedUser, setIsAuthenticatedUser] = React.useState(false);

    React.useEffect(() => {
        // Use this when we set isRegisteredUser to the JWT after registration
        // if (auth.isAuthenticated()) {
        //     setIsAuthenticatedUser(auth.getProfile().isRegisteredUser || false);
        // } else {
        // }
    }, []);

    // TODO: Check if path is registration and change tabs on that
    return (
        <div>
            <Paper className={classes.root}>
                <Tabs
                    value={0}
                    centered>
                    {navbarTabs.map((tab, index) => {
                        // Use this when we set isRegisteredUser to the JWT after registration
                        // if (tab.requiresAuth && !isAuthenticatedUser) {
                        //     return;
                        // }
                        return <Tab key={index} label={tab.name} component={Link} to={`${path}${tab.path}`} />
                    })}
                </Tabs>
            </Paper>
        </div>
    );
}

export default StudentNavbar;



