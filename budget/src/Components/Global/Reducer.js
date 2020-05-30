const CHANGE_TRANSACTION_VIEW = 'CHANGE_TRANSACTION_VIEW';


const Reducer = function(state,action){
    switch (action.type) {
        case CHANGE_TRANSACTION_VIEW:
            state.transactionList[action.id].minimized =!state.transactionList[action.id].minimized;
            this._callSubscriber(this._state);

    }

}

export