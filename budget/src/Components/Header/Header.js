import React from 'react';
import s from './Header.module.css';
import budgetIcon from '../../images/budgetIcon.png'
import {NavLink} from "react-router-dom";
import HeaderLink from "./HeaderLink/HeaderLink";

const Header = function (props) {
    console.log(window.innerHeight);
    return (
        <div className={s.header_wrapper}>
            <header className={s.header_container}>
                <div className={s.header_leftSide}>
                    <img className={`${s.icon} ${s.hoverElement}`}
                         src={budgetIcon}/>
                    <div>
                        <h2 className={`${s.text}`}>Budget Planning</h2>
                    </div>
                </div>
                <div className={s.navbar}>
                    <HeaderLink to={'/options'}
                                text={'Options'}
                                setCurrentLocation={props.setCurrentLocation}
                                state={props.state}/>
                    <HeaderLink to={'/'}
                                text={'Main'}
                                setCurrentLocation={props.setCurrentLocation}
                                state={props.state}/>
                </div>
            </header>

        </div>
    );
}
export default Header