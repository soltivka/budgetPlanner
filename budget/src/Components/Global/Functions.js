export const findDate = function (element) {
    let splitted = element.updated_on.split('-');
    let day = Number(splitted[2][0] + '' + splitted[2][1]);
    let month = Number(splitted[1]);
    let year = Number(splitted[0]);
    return [day, month, year]
};

export const findSize = function (el) {
    let amount = el.amount;
    if (el.t_oper === 1) {
        amount = amount - (2 * amount);
    } else if (el.t_oper === 2) {

    } else if (el.t_oper === 3) {
        console.log('operationType - peremeshenie !!!!!');
    }
    return amount
}

export const parseData = function (data) {
    let transactionList = [];
    data.map((el, i, arr) => {
        let newListElem = {};
        newListElem.id = i;
        newListElem.size = Math.round(findSize(el));
        newListElem.date = findDate(el);
        newListElem.name = el.t_purpose;
        newListElem.text = JSON.stringify(el);
        newListElem.type = el.t_cash_type;
        newListElem.minimized = true;
        transactionList.push(newListElem);
    })
    return transactionList
}
export const getNowDate = function () {
    let date = new Date();
    return (`${date.getDate()}.${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`);
}
export const sortByDate = (transactionList) => {
    let sortedList = [];
    let existingDate = [];
    transactionList.map((el, j, arr) => {
        if (j === 0) {
            existingDate.push(el.date);
            let arr=[el];
            sortedList.push(arr);
        } else {
            let counter = 0;
            for (let i = 0; i <existingDate.length; i++) {
                if (el.date[0] === existingDate[i][0]
                    && el.date[1] === existingDate[i][1]
                    && el.date[2] === existingDate[i][2]) {
                    sortedList[i].push(el);
                    counter=1;
                }
            }
            if (counter === 0) {
                let arr = [el]
                sortedList.push(arr);
                existingDate.push(el.date);
            }
        }
    })
    return sortedList
}

export const getSumOfIncomes = (transactionList) => {
    let sumOfIncomes = 0;
    let sumOfSpendings = 0;
    transactionList.map((el, i, arr) => {
        if (el.size > 0) {
            sumOfIncomes += el.size
        } else {
            sumOfSpendings += el.size;
        }
    })
    return {sumOfIncomes, sumOfSpendings}
};

export const getSumByDate = function(transactionList,dirrection){
    let sortedList = sortByDate(transactionList);
    let sumsByDate = [];
    for(let i=0;i<sortedList.length; i++){
        let dateTransactions = sortedList[i];

        let sum = 0;
        for(let j=0;j<dateTransactions.length;j++){
            if(dirrection==='incomes'){
                sum=dateTransactions[j].size>0?sum+dateTransactions[j].size:sum;
            }
            if(dirrection==='spendings'){
                sum=dateTransactions[j].size>0?sum:sum+dateTransactions[j].size;
            }
        }
        sumsByDate.push(sum);
    }
    return sumsByDate;
}
export const findMaxBarHeight = function(sumOfIncomes){
    if(sumOfIncomes[0]>0){
        return Math.max.apply(null, sumOfIncomes);
    }else{
        return Math.min.apply(null, sumOfIncomes);
    }
}
export const transfomToPercent = function(sumOfIncomes){
    let highest = findMaxBarHeight(sumOfIncomes);
    let percent = highest / 100;
    let persentsSumOfIncomes = sumOfIncomes.map((el,i,arr)=>{
        let elPercent = Math.ceil(el/percent);
        return elPercent
    })

    return persentsSumOfIncomes
}


