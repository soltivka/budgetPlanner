import React from 'react';
import s from './Graphs.module.css';
import {NavLink} from "react-router-dom";
import InfoBoard from "./InfoBoard/InfoBoard";
import BarChart from "./BarChart/BarChart";

const Graphs = function (props) {
    return (
        <div className={s.graphs_container}>
            Graphs
            <div className={s.graphs_content}>
                <div className={s.infoBoards}>
                    <InfoBoard colors={props.state.colors}
                               income={props.state.sumOfIncomes.sumOfIncomes}
                               display={"incomes"}/>
                    <InfoBoard colors={props.state.colors}
                               income={props.state.sumOfIncomes.sumOfSpendings}

                               display={"spendings"}/>
                    <InfoBoard colors={props.state.colors}
                               income={100}

                               display={"Чото еще"}/>
                    <InfoBoard colors={props.state.colors}
                               income={-300}
                               display={"И еще чтото"}/>
                </div>
                <div className={s.Charts}>
                    <div className={s.chartBlock}>
                        <BarChart transactionList={props.state.transactionList}
                                  display={"incomes"}
                                  colors={props.state.colors}
                        />
                    </div>
                    <div className={s.chartBlock}>
                        <BarChart transactionList={props.state.transactionList}
                                  display={"spendings"}
                                  colors={props.state.colors}
                        />
                    </div>
                    <div className={s.chartBlock}>
                        <BarChart transactionList={props.state.transactionList}
                                  display={"spendings"}
                                  colors={props.state.colors}
                        />
                    </div>
                    <div className={s.chartBlock}>
                        <BarChart transactionList={props.state.transactionList}
                                  display={"incomes"}
                                  colors={props.state.colors}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Graphs