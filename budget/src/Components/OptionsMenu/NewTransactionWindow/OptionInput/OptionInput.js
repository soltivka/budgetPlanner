import React from 'react';
import s from './OptionInput.module.css';

const OptionInput= function (props) {
    let options = props.options.map((el, i, arr) => {
        return (
            <option
                className={s.optionArea}
                id={i}
                key={i}
                text={el}
                name={props.name}
                dispatch={props.dispatch}>{el}</option>
        )
    })
    return (
        <div className={s.container}>
            <div className={s.body}>
                <select className={s.selectArea}>
                    {options}
                </select>
            </div>

            <div className={s.header}>{props.name}</div>

        </div>
    );
}
export default OptionInput