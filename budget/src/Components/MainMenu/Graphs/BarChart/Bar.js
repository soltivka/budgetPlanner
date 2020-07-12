import React from 'react';
import s from './Bar.module.css';

const Bar = function (props) {
    return (
        <div className={s.Bar}
             style={{
                 backgroundColor: props.color,
                 height: props.height,
             }}>

        </div>
    );
}
export default Bar