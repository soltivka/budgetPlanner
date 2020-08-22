import React from 'react';
import s from './BarChart.module.css';
import Bar from "./Bar";
import {findMaxBarHeight, getSumByDate, transfomToPercent} from "../../../Global/Functions";

const BarChart = function (props) {
    let sumsByDate = getSumByDate(props.transactionList, props.display);
    let maxHeight = findMaxBarHeight(sumsByDate);
    console.log(maxHeight);
    let percentHeight = transfomToPercent(sumsByDate);
    let color = props.display === "incomes" ? props.colors.green : props.colors.red;
    console.log(props);

    let barCollection = percentHeight.map((el, i, arr) => {
        return (

            <Bar
                key={i}
                height={el}
                width={100 / arr.length}
                color={color}
                dispatch={props.dispatch}/>
        )
    })


    return (
        <div className={s.container}>
            <div className={s.header}>{props.display}</div>
            <div className={s.body}>
                <div className={s.yAxis}>
                    <p className={s.smallText}>{maxHeight}</p>
                </div>
                <div className={s.graph}>
                    {barCollection}
                </div>
            </div>
        </div>
    );
}
export default BarChart