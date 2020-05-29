import React from 'react';
import s from './Graphs.module.css';
import {NavLink} from "react-router-dom";
import AreaChart from "./AreaChart/AreaChart";

const Graphs = function (props) {
    return (
        <div className={s.graphs_container}>
            Graphs
            <div className={s.graphs_content}>
                <AreaChart/>
            </div>
        </div>
    );
}
export default Graphs