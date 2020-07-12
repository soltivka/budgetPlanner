import React from 'react';
import s from './TextInput.module.css';

const TextInput= function (props) {

    return (
        <div className={s.container}>

            <div className={s.body}>
                <input className={s.tArea} type={'text'} placeholder={props.placeholder}/>
            </div>
            <div className={s.header}>{props.name}</div>

        </div>
    );
}
export default TextInput