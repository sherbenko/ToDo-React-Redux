import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import Store from "./store/Store";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={Store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById('root')
);

