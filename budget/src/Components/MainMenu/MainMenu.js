import React from 'react';
import s from './MainMenu.module.css';
import {NavLink} from "react-router-dom";
import Graphs from "./Graphs/Graphs";
import Transactions from "./Transactions/Transactions";

const MainMenu = function (props) {
    return (
        <div className={s.screen}>
            <Graphs></Graphs>
            <Transactions></Transactions>

        </div>
    );
}
export default MainMenu