import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

interface RoutingProps {
    auth: any;
}

const Routing: React.FunctionComponent<RoutingProps> = ({auth}) => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} render={() => <HomePage auth={auth} />} />
                <Route path="/login" render={() => <LoginPage auth={auth} />} />
                <Route path="/home" render={() => <HomePage auth={auth} /> } />
            </Switch>
        </Router>
    );
}

export default Routing;