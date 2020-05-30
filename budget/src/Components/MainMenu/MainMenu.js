import React from 'react';
import s from './MainMenu.module.css';
import {NavLink} from "react-router-dom";
import Graphs from "./Graphs/Graphs";
import Transactions from "./Transactions/Transactions";

const MainMenu = function (props) {
    return (
        <div className={s.screen}>
            <Graphs
            state={props.state}/>
            <Transactions
                changeTransactionView={props.changeTransactionView}
                transactionList={props.state.transactionList}
                colors={props.state.colors}/>
        </div>
    );
}
export default MainMenu