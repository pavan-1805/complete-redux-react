import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

console.log('STORE');
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.subscribe(()=>console.log(store.getState()))
export default store;
