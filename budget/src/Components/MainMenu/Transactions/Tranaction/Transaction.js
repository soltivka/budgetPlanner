import React from 'react';
import s from './Transaction.module.css';
import {NavLink} from "react-router-dom";


const Transaction = function (props) {
    const color = props.incomeSize>0?'209, 255, 209':'255, 209, 209';
    return (
        <div className={s.transaction_container}
             style={{
                 backgroundColor: `rgb(${color})`,
             }}>
            <div><h2>{props.incomeSize}</h2></div>
            <div className={s.date}><h5 >{props.transactionDate}</h5></div>
        </div>
    );
}
export default Transaction