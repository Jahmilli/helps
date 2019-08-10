import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

const Routing: React.FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} render={() => <HomePage />} />
                <Route path="/login" render={() => <LoginPage />} />
                <Route path="/home" render={() => <HomePage /> } />
            </Switch>
        </Router>
    );
}

export default Routing;