import * as React from 'react';
import { Tab, Tabs, AppBar} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { studentNavbarStyles } from './styles';
import Auth from '../../logic/functions/core/Auth.js';

interface StudentNavbarProps {
    auth: Auth;
    path: string;
    navbarTabs: [NavbarTab];
    children: any;
}

export interface NavbarTab {
    name: string;
    path: string;
    requiresAuth: boolean;
}

const StudentNavbar: React.FunctionComponent<StudentNavbarProps> = ({ auth, path, navbarTabs, children }) => {
    const classes = studentNavbarStyles();
    const [isAuthenticatedUser, setIsAuthenticatedUser] = React.useState(false);
    const [tabValue, setTabValue] = React.useState(0);

    React.useEffect(() => {
        // Use this when we set isRegisteredUser to the JWT after registration
        // if (auth.isAuthenticated()) {
        //     setIsAuthenticatedUser(auth.getProfile().isRegisteredUser || false);
        // } else {
        // }
    }, []);

    return (
        <div>
            {children}
            <AppBar position="static" className={classes.root}>
                <Tabs
                    value={tabValue}
                    centered>
                    {navbarTabs.map((tab: NavbarTab, index: number) => {
                        // Use this when we set isRegisteredUser to the JWT after registration
                        // if (tab.requiresAuth && !isAuthenticatedUser) {
                        //     return;
                        // }
                        return <Tab key={index} 
                            label={tab.name} 
                            component={Link} 
                            to={`${path}${tab.path}`} 
                            onClick={() => setTabValue(index)}/>
                    })}
                </Tabs>
            </AppBar>
        </div>
    );
}

export default StudentNavbar;



