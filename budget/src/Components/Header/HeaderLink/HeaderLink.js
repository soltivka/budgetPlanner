import React from 'react';
import s from './HeaderLink.module.css';
import {NavLink} from "react-router-dom";
import {setCurrentUrlLocation_action} from "../../Global/Actions";



const HeaderLink = function (props) {
    const currentClass = props.to===props.state.currentLocation?`${s.headerButtonActive}`:`${s.headerButton}`;
    const click = function () {
        props.dispatch(setCurrentUrlLocation_action(props.to));
    }

    return (
        <div className={s.buttonWrapper}>
            <NavLink to={props.to}>
                <button className={currentClass}
                        onClick={click}>{props.text}</button>
            </NavLink>

        </div>
    );
}
export default HeaderLink