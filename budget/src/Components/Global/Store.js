import data from "./data.js";
import {findDate, findSize} from "./Functions";

const Store = {
    _state: {
        windowHeight: 0,
        currentLocation: '/',


        transactionList: [],

    },
    setStartState(data) {
        this._state.transactionList = parseData_transactionList(data);
        this._callSubscriber(this._state);
    },

    changeTransactionView(id) {
        this._state.transactionList[id].minimized = !this._state.transactionList[id].minimized;
        this._callSubscriber(this._state);
    },
    setCurrentLocation(location) {
        this._state.currentLocation = location;
        this._callSubscriber(this._state);
    },

    _callSubscriber() {
    },

    subscribe(observer) {
        this._state.windowHeight = window.innerHeight;
        this._callSubscriber = observer;
        this._callSubscriber(this._state);
    }
}
const parseData_transactionList = function (data) {
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
export default Store