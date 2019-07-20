import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import AllReducer from './reducers/index';
import { Provider } from 'react-redux';

//Configurando STORE - É como se fosse o state global. (tipo in memory db)
const store = createStore(AllReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// //Action - descreve o que vc deseja fazer. Ex: um contador que começa do zero será nomeado como contador, que é ação que vc deseja executar. É uma função que retorna um objeto.
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

// //Reducer - descreve como as actions transformam o state para o próximo state. Checa o que deve ser feito
// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//                 return state + 1;

//         case "DECREMENT":
//             return state - 1;
    
//         default:
//             break;
//     }
// }

// let store = createStore(counter);

// store.subscribe(() => console.log(store.getState()));

// //Dispatch - onde executa a action
// store.dispatch(increment());
// store.dispatch(decrement());



ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
