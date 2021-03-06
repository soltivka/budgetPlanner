import React from 'react';
import './App.css';
import s from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import MainMenu from "./Components/MainMenu/MainMenu";
import Header from "./Components/Header/Header";
import OptionsMenu from "./Components/OptionsMenu/OptionsMenu";


const renderMergedProps = (component, ...rest) => {           //вспомогательные функции для передачи пропс в компоненты
    const finalProps = Object.assign({}, ...rest);
    return (
        React.createElement(component, finalProps)
    );
}
const PropsRoute = ({component, ...rest}) => {               //вспомогательные функции для передачи пропс в компоненты
    return (
        <Route {...rest} render={routeProps => {
            return renderMergedProps(component, routeProps, rest);
        }}/>
    );
}




const App = function (props) {
    return (
        <BrowserRouter>
            <div className={s.app}
                 style={{
                     height: `${props.state.header.windowHeight}px`,
                 }}>

                <Header dispatch={props.dispatch}
                        state={props.state.header}/>
                <div>
                    <PropsRoute path='/options'
                                component={OptionsMenu}

                    />
                    <PropsRoute exact path='/'
                                component={MainMenu}
                                state={props.state.mainMenu}
                                dispatch={props.dispatch}
                    />
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;
