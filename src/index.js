import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
// import  ActionDispatch  from './action';
import './index.css';
import CounterAction from './store/actions/counter';

import store from './store';
import { Provider } from 'react-redux';

// const Initial_State ={
//   roll : 34,

// }


/*
export const rootReducer = combineReducers({
    counter
// more reducers go here
})*/

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: ActionDispatch.Inc })
// // 1
//  store.dispatch({ type: ActionDispatch.Inc })
// // 2
// store.dispatch({ type: ActionDispatch.Dec })
// 1

function handleIncrement(){
  store.dispatch(CounterAction.incrementWithValue(2))
}

ReactDOM.render(

  //Wraping up in Provider
  // Update in Counter 3 is button and click event
  <Provider store={store}>
  <div>
    <App/>
    {/*<div>
      Events from index.jsx <br/>
      <button onClick={()=>store.dispatch(CounterAction.incrementWithValue(5))}> Increment with value 5</button><br/>
      <button onClick={()=>store.dispatch(CounterAction.decrement())}> Decrement</button><br/>
      <button onClick={handleIncrement}>Increment with Handler with value 2</button><br/>
    </div>*/}
  </div>
  </Provider>
  ,
  document.getElementById('root')
);