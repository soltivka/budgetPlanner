import {combineReducers, createStore} from "redux";
import mainMenu_reducer from "./reducers/mainMenu_reducer";
import header_reducer from "./reducers/header_reducer";

let reducers = combineReducers({
    mainMenu: mainMenu_reducer,
    header: header_reducer,
});

let store = createStore(reducers);

export default store;