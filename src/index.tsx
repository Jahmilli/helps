import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './logic/functions/core/Auth';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';


const auth = new Auth();
ReactDOM.render(<App auth={auth}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
