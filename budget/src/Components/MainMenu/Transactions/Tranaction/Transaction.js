import React from 'react';
import s from './Transaction.module.css';


const Transaction = function (props) {
    const color = props.size > 0 ? '209, 255, 209' : '255, 209, 209';
    const click=()=>{
        props.changeTransactionView(props.id);
    }
    console.log(props);
    return (
        <div className={s.transaction_container}
             style={{
                 borderColor: `rgb(${color})`,
                 minHeight: props.minimized ? '50px' : '115px',
             }}>
            <div className={s.mainArea}>

                <div className={s.date}><p>{props.date}</p></div>
                <div className={s.transactionName}><p>{props.name}</p></div>
                <div className={s.incomeSize}><p>{props.size}</p></div>
                <div  className={s.wrapButton}
                      style={{
                    transform: props.minimized ? 'rotate(90deg)' : 'rotate(270deg)',
                          borderBottom: `solid 2px rgb(${color})`
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