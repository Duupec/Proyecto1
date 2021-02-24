/* Create a redux store, necesitamos el initial state y el reducer
Este store solo retorna una lista de productos en nuestro data.js en frontend*/
import {createStore} from 'redux';
import data from './data';
const initialState = {};
const reducer=(state,action)=>{
    return {products:data.products};
};

const store =createStore(reducer,initialState);
export default store;