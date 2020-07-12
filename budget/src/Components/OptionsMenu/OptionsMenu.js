import React from 'react';
import s from './OptionsMenu.module.css';
import NewTransactionWindow from "./NewTransactionWindow/NewTransactionWindow";

const OptionsMenu = function (props) {
    return (
        <div className={s.optionMenu}>
        <input type="date" class="form-control" id="date" name="date" placeholder="Дата" required/>
        <NewTransactionWindow></NewTransactionWindow>
        </div>
    );
}
export default OptionsMenu