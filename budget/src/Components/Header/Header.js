import React from 'react';
import s from './Header.module.css';
import budgetIcon from '../../images/budgetIcon.png'
import {NavLink} from "react-router-dom";
import HeaderLink from "./HeaderLink/HeaderLink";

const Header = function (props) {
    return (
        <div className={s.header_wrapper}>
            <header className={s.header_container}>
                <div className={s.header_leftSide}>
                    <img className={`${s.icon} ${s.hoverElement}`}
                         src={budgetIcon}/>
                    <div>
                        <h4 className={`${s.text}`}>Coonjyt</h4>
                    </div>
                </div>
                <div className={s.navbar}>
                    <HeaderLink to={'/options'}
                                text={'Options'}
                                dispatch={props.dispatch}
                                state={props.state}/>
                    <HeaderLink to={'/'}
                                text={'Main'}
                                dispatch={props.dispatch}
                                state={props.state}/>
                </div>
            </header>

        </div>
    );
}
export default Header