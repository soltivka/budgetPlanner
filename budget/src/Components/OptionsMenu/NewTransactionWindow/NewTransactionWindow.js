import React from 'react';
import s from './NewTransactionWindow.module.css';
import OptionInput from "./OptionInput/OptionInput";
import TextInput from "./TextInput/TextInput";

const NewTransactionWindow = function (props) {
    return (
        <div className={s.newTransactionCotrainer}>
            <div className={s.header}>Create new transaction</div>
            <div className={s.body}>
                <TextInput name={'T purpose'}
                           placeholder={'Назначение'}
                           dispatch={props.dispatch}/>
                <OptionInput options={['one', 'two', 'three']} name={'T cash type'}></OptionInput>
                <OptionInput options={['one', 'two', 'three']} name={'T check'}></OptionInput>
                <OptionInput options={['one', 'two', 'three']} name={'T oper'}></OptionInput>
                <OptionInput options={['one', 'two', 'three']} name={'T suboper'}></OptionInput>
                <OptionInput options={['one', 'two', 'three']} name={'T budget'}></OptionInput>
                <TextInput name={'amount'}
                           placeholder={'Сколька денех'}
                           dispatch={props.dispatch}/>
                <TextInput name={'plan ID'}
                           placeholder={'чото айди чивота'}
                           dispatch={props.dispatch}/>
                <TextInput name={'perm ID'}
                           placeholder={'перм айди'}
                           dispatch={props.dispatch}/>

            </div>
        </div>
    );
}
export default NewTransactionWindow