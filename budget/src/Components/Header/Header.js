import React from 'react';
import s from './Header.module.css';
import budgetIcon from '../../images/budgetIcon.png'
import {NavLink} from "react-router-dom";

const Header = function (props) {
    console.log(window.innerHeight);
    return (
        <div className={s.header_wrapper}>
            <header className={s.header_container}>
                    <img className={`${s.icon} ${s.hoverElement}`}
                         src={budgetIcon}/>
                <div>
                    <h2 className={`${s.text}`}>Budget Planning</h2>
                </div>
            </header>

        </div>
    );
}
export default Header