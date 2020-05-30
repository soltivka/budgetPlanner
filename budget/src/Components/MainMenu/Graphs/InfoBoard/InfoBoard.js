import React from 'react';
import s from './InfoBoard.module.css';

const InfoBoard = function (props) {
    let color=props.display==="incomes"?props.state.colors.green:props.state.colors.red;
    console.log(color);
    return (
        <div className={s.InfoBoard_container}>
            <div className={s.InfoBoard_header}>
                <h3>Last month income</h3>

            </div>

        </div>
    );
}
export default InfoBoard