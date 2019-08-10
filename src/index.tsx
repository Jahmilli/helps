import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './logic/functions/core/Auth';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

const auth = new Auth();

/* eslint no-restricted-globals: 0 */
// let username = auth.getProfile().given_name || "seb"
let initialState = {
    name: "",
    // location: location.pathname.replace(/^\/?|\/$/g, ""),
    auth
}

ReactDOM.render(<App { ...initialState }/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
