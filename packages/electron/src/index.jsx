import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './Profile';
import { BrowserRouter, Route } from "react-router-dom";


import * as serviceWorker from './serviceWorker';
import DataProvider from './providers/DataProvider'
import MainContainer from './containers/MainContainer';
ReactDOM.render(
    <React.StrictMode>
        <DataProvider>
            <MainContainer />
        </DataProvider>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();