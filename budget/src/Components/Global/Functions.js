export const findDate=function(element){
    let splitted = element.updated_on.split('-');
    let day = splitted[2][0]+''+splitted[2][1];
    let month = splitted[1];
    let year = splitted[0];
    return day + '.' + month + '.' + year;
};

export const findSize = function(el){
    let amount = el.amount;
    if(el.t_oper===1){
        amount=amount-(2*amount);
    }else if(el.t_oper===2){

    }else if (el.t_oper ===3){
        console.log('operationType - peremeshenie !!!!!');
    }
    return amount
}
