import data from "./data.js";
import {findDate, findSize} from "./Functions";

const Store = {
    _state: {
        windowHeight: 0,
        currentLocation: '/',


        transactionList: [],



        colors:{
            red: "rgba(255, 209, 209,1)",
            green: "rgba(209, 255, 209,1)",
        }

    },
    setStartState(data) {
        this._state.transactionList = parseData_transactionList(data);
        this._callSubscriber(this._state);
    },

    changeTransactionView(id) {
        this._state.transactionList[id].minimized = !this._state.transactionList[id].minimized;
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


export default Store