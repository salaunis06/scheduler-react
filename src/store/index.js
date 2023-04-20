import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import staff from './staff'
import schedule from './schedule'


const appReducer = combineReducers({ staff, schedule });

const rootReducer = (state, action) => {
    if(action.type === 'LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action);
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;