import {createStore} from 'redux';
import {loadState,saveState} from './sessionStorage.js';

import allReducers from '../redux/reducers'

//const persistedState = loadState();
const store = createStore(allReducers,loadState());
store.subscribe(()=> saveState(store.getState()))


export default store;

