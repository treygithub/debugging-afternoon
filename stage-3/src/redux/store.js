import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import { createStore,applyMiddleware } from "redux";

const store = createStore(reducer);
export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));