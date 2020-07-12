import React from 'react';
import s from './Transaction.module.css';
import {changeTransactionView_action} from "../../../Global/Actions";


const Transaction = function (props) {
    const color = props.size > 0 ? props.colors.green : props.colors.red;
    const click=function(){
        props.dispatch(changeTransactionView_action(props.id))
    }
    const day=props.date[0]>9?props.date[0]:'0'+props.date[0];
    const month = props.date[1]>9?props.date:'0'+props.date[1];
    const year=props.date[2];
    return (
        <div className={s.transaction_container}
             style={{
                 borderColor: color,
                 minHeight: props.minimized ? '50px' : '115px',
             }}>
            <div className={s.mainArea}>

                <div className={s.date}><p>{`${day}.${month}.${year}`}</p></div>
                <div className={s.transactionName}><p>{props.name}</p></div>
                <div className={s.incomeSize}><p>{props.size}</p></div>
                <div  className={s.wrapButton}
                      style={{
                    transform: props.minimized ? 'rotate(90deg)' : 'rotate(270deg)',
                }} onClick={click}>{'>'}</div>
            </div>
            <div style={{
            }}
                 className={s.aditionalArea}
            ><p>{props.text}</p>
            </div>
        </div>
    );
}
export default Transaction