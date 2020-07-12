import React from 'react';
import s from './BarChart.module.css';
import Bar from "./Bar";
import {findMaxBarHeight, getSumByDate, sortByDate, transfomToPercent} from "../../../Global/Functions";

const BarChart = function (props) {
    let sumsByDate = getSumByDate(props.transactionList,props.display);
    let percentHeight = transfomToPercent(sumsByDate);
    let color = props.display==="incomes"?props.colors.green:props.colors.red;
    console.log(props);

    let barCollection = percentHeight.map((el, i, arr) => {

        return (
            <Bar
                key={i}
                height={el}
                color={color}
                dispatch={props.dispatch}/>
        )
    })



    return (
        <div className={s.container}>
            <div className={s.header}>{props.display}</div>
            <div className={s.graph}>
                {barCollection}
            </div>
        </div>
    );
}
export default BarChart