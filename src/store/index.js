import { createStore } from 'redux';
// import counter from './reducers/counter';
import { combineReducers, applyMiddleware } from 'redux';
import incrementCounter from './reducers/incrementCounter';
import decrementCounter from './reducers/decrementCounter';
import thunk from 'redux-thunk';

const middleWare = applyMiddleware(thunk);

export const rootReducer = combineReducers({
    incrementCounter,
    decrementCounter
})

let store = createStore(rootReducer, middleWare)

store.subscribe(()=> 
    console.log(store.getState())
);

export default store;