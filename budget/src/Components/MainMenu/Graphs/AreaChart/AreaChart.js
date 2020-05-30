import React from 'react';
import s from './AreaChart.module.css';
import {HorizontalGridLines, LineSeries, MarkSeries, VerticalBarSeries, XAxis, XYPlot, YAxis} from "react-vis";
const click = function(){console.log("click")};

const AreaChart = function (props) {
    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
    ];
    return (
        <div className={s.areaChartContainer}>
            <XYPlot height={200} width={200}>
                <HorizontalGridLines />
                <VerticalBarSeries
                    data={data}
                    onClick={click}
                    color={"blue"}/>
                <XAxis />
                <YAxis />
            </XYPlot>

        </div>


    );
}
export default AreaChart