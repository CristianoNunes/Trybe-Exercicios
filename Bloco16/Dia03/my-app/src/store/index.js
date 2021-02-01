import { createStore, combineReducers } from 'redux';
import Reducer from '../reducers';

const rootReducer = combineReducers({ Reducer });

const store = createStore(rootReducer);

export default store;