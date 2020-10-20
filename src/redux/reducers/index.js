import {combineReducers} from 'redux';
import taskReducer from "./task";

const allReducers = combineReducers({task:taskReducer});

export default allReducers;