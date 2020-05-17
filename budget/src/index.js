import React from 'react';
import './index.css';
import Store from "./Components/Global/Store";
import ReactDOM from "react-dom";
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

Store.createNewTable()
Store.subscribe(render)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
