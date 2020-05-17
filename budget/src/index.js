import React from 'react';
import './index.css';
import Store from "./Components/Global/Store";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const render = function (state) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

Store.subscribe(render)

serviceWorker.unregister();
