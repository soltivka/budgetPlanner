import React from 'react';
import s from './Graphs.module.css';
import {NavLink} from "react-router-dom";

const Graphs = function (props) {
    return (
        <div className={s.graphs_container}>
            Graphs
            <div className={s.graphs_content}>
            </div>
        </div>
    );
}
export default Graphs