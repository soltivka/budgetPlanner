import React from 'react';
import s from './Transactions.module.css';
import {NavLink} from "react-router-dom";
import Transaction from "./Tranaction/Transaction";

const Transactions = function (props) {
    let transactionComponents = props.state.map((el, i, arr) => {
        return (
            <Transaction
                id={el.id}
                key={i}
                size={el.size}
                date={el.date}
                name={el.name}
                text={el.text}
                minimized={el.minimized}
                colors={props.colors}
                dispatch={props.dispatch}/>
        )
    })

    return (
        <div className={s.transactions_container}>
            Transactions
            <div className={s.transactions_content}>
                {transactionComponents}
            </div>
        </div>
    );
}
export default Transactions;