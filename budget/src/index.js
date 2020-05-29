import React from 'react';
import './index.css';
import Store from "./Components/Global/Store";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import data from "./Components/Global/data";

const render = function (state) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                setCurrentLocation={Store.setCurrentLocation.bind(Store)}
                     changeTransactionView={Store.changeTransactionView.bind(Store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
Store.setStartState(data);
console.log(Store._state)
Store.subscribe(render);


serviceWorker.unregister();
