import React from 'react';
import s from './NewTransactionWindow.module.css';
import OptionInput from "./OptionInput/OptionInput";
import TextInput from "./TextInput/TextInput";

const NewTransactionWindow = function (props) {
    let token = "f116cd434e486297d8d9c7e1c41739a4d89415f0"
    let login = 'Stas';
    let password ='Stas123456';
    async function postData(url = '') {
        fetch(url,{
            mode:'no-cors',
            Authorization:'Basic '+ token,
            method: 'GET',
            credentials: "include",
        })
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function(data) {
                        console.log(data);
                    });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }




    let click = function(){
        postData("http://139.59.143.67/accounts/profile/").then((res)=>{console.log(res)});

    }

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
            <button onClick={click}>чтото сделать</button>
        </div>
    );
}
export default NewTransactionWindow