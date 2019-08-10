import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

const Routing: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} render={() => <HomePage />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routing;