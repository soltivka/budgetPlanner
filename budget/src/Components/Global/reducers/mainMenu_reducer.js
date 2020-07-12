import {getSumByDate, getSumOfIncomes, parseData, sortByDate,} from "../Functions";
import someData from "../data";
const CHANGE_TRANSACTION_VIEW = 'CHANGE_TRANSACTION_VIEW';

const transactionList=parseData(someData);
const sumOfIncomes = getSumOfIncomes(transactionList);
const sumsByDate = getSumByDate(transactionList,"incomes");
const spendingsByDate = getSumByDate(transactionList,"spendings");
const initialState = {
    transactionList,
    sumOfIncomes,
    sumsByDate,
    spendingsByDate,
    colors: {
        red: "rgba(255, 209, 209,1)",
        green: "rgba(209, 255, 209,1)",
    }
}


const mainMenu_reducer = function (state, action) {
    if (state) {
        switch (action.type) {
            case CHANGE_TRANSACTION_VIEW:
                state.transactionList[action.id].minimized = !state.transactionList[action.id].minimized;
                sortByDate(state.transactionList)
        }
        return state
    } else
        return initialState;
}

export default mainMenu_reducer;