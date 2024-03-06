import { combineReducers, createStore } from 'redux';

import { multiFormReducer } from './multiFormReducer';

const rootReducer = combineReducers({
    multiFormModule: multiFormReducer,
})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)