import React from 'react';
import s from './Graphs.module.css';
import {NavLink} from "react-router-dom";
import AreaChart from "./AreaChart/AreaChart";
import InfoBoard from "./InfoBoard/InfoBoard";

const Graphs = function (props) {
    return (
        <div className={s.graphs_container}>
            Graphs
            <div className={s.graphs_content}>
                <div className={s.infoBoards}>
                    <InfoBoard state={props.state}
                                display={"incomes"}/>
                    <InfoBoard state={props.state}
                               display={"spendings"}/>
                </div>
                <AreaChart/>

            </div>
        </div>
    );
}
export default Graphs