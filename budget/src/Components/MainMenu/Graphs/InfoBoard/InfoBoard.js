import React from 'react';
import s from './InfoBoard.module.css';
import someicon from '../../../../images/someicon.png'

const InfoBoard = function (props) {
    const color = props.income > 0 ? props.colors.green : props.colors.red;
    return (
        <div className={s.InfoBoard_container}>
            <div className={s.InfoBoard_header}>
                <h4>{props.display}</h4>
            </div>
            <div className={s.InfoBoard_body}>
                <div className={s.leftSide}>
                    <h1 style={{
                        color: color,
                    }}>
                        {props.income}
                    </h1>
                    <p>last 30 days</p>

                </div>
                <img  className={s.icon} src={someicon}/>



            </div>

        </div>
    );
}
export default InfoBoard