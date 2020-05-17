import React from 'react';
import s from './Transactions.module.css';
import {NavLink} from "react-router-dom";
import Transaction from "./Tranaction/Transaction";

const Transactions = function (props) {
    return (
        <div className={s.transactions_container}>
            Transactions
            <div className={s.transactions_content}>
                <Transaction incomeSize={900} transactionDate={'25.03.15'}/>
                <Transaction incomeSize={-300} transactionDate={'25.03.15'}/>
                <Transaction incomeSize={0} transactionDate={'25.03.15'}/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>

            </div>

        </div>
    );
}
export default Transactions