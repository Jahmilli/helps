import * as React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

import Callback from './Callback';
import Auth from '../../logic/functions/core/Auth';
import StudentHomePage from './StudentHomePage';
import AdminHomePage from './AdminHomePage';

interface RoutingProps {
    auth: Auth;
}

const PrivateRoute = ({ component: Component, auth, ...rest }: any) => (
    <Route
        {...rest}
        render={(props) => auth.isAuthenticated() === true
            ? <Component auth={auth} {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
);

const Routing: React.FunctionComponent<RoutingProps> = ({ auth }) => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} render={() => <HomePage />} />
                <Route path="/login" render={() => <LoginPage auth={auth} />} />
                <Route path="/callback" render={() => <Callback auth={auth} />} />
                <Route path="/student" render={(props: any) => <StudentHomePage auth={auth} props={props} />} />
                <Route path="/admin" render={(props: any) => <AdminHomePage auth={auth} props={props} />} />
                <PrivateRoute auth={auth} path="/home" component={HomePage} />
            </Switch>
        </Router>
    );
}

export default Routing;