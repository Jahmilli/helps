import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

const Routing: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} render={() => <HomePage />} />
                <Route path="/login" exact={true} render={() => <LoginPage />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routing;