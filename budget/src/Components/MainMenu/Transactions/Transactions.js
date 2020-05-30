import React from 'react';
import s from './Transactions.module.css';
import {NavLink} from "react-router-dom";
import Transaction from "./Tranaction/Transaction";

const Transactions = function (props) {

    const createTransactionList = function(transactions){
        let transactionList =[];
        transactions.map((el, i, arr) => {
            let transaction = ()=>{
                return (
                        <Transaction
                            id={el.id}
                            key={el.id}
                            size={el.size}
                            date={el.date}
                            name={el.name}
                            text={el.text}
                            minimized={el.minimized}
                            colors={props.colors}
                            changeTransactionView={props.changeTransactionView}/>
                )
            };
            transactionList.push(transaction());
        })
        return transactionList;
    };

    return (
        <div className={s.transactions_container}>
            Transactions
            <div className={s.transactions_content}>
                {createTransactionList(props.transactionList)}
            </div>
        </div>
    );
}
export default Transactions;