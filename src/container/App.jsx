import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CounterAction from './../store/actions/counter';
import Counter from './../components/counter/Counter';
import CounterMiddleware from './../store/middlewares/counterMiddleware';

// Mapping the component's property to Redux's state
function mapStateToProps(state) {
  return {
    // counter - this will be component's property counter and can be accessed
    // as this.props.counter
    // state - this will be the state of redux, whatever value we return from
    // reducer function will be in state, for now we are sending simple numaric
    // value therefore it will be simple integer
    incCounter: state.incrementCounter.incrementState,
    decCounter: state.decrementCounter.decrementState
  };
}

// Update in counter 4
// increment and decrement will be functions and will be 
// available in this.props.increment and this.props.decrement.

// store object is not avaiable here so we will map dispatch to properties and
// pass it in connect function then redux will map it
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(CounterAction.increment()),
    // update in counter 6 -- sending value in action
    decrement: () => dispatch(CounterAction.decrementWithValue(4)),
    incrementAgain: function () {
      console.log("Incrementing value ");
      // any logic and come here

      // then return dispatch
      return dispatch(CounterAction.incrementWithValue(3));
    },

    // Update in counter 7 -- calling it from component
    incrementWithValue: function (value) {
      console.log("Incrementing with value");
      return dispatch(CounterMiddleware.asyncIncrement(value));
    }
  };
}

class App extends Component {

  constructor() {
    super();

    // Update in counter 7 -- created component state to update value from user input
    this.state = {
      counterValue: 0
    };
  }

  // Update in counter 7 -- bind on input change event and updating state 
  valueChange(event) {
    this.setState({ counterValue: parseInt(event.target.value) });
  }

  handelClick() {
    this.props.incrementWithValue(this.state.counterValue);
  }

  updateCounter(value) {
    this.props.incrementWithValue(value);
  }


  // Update in counter 7 -- added input text box and another button
  render() {
    return (
      <div >
        <div>
          <Counter counter={this.props.incCounter + this.props.decCounter}
            update={this.updateCounter.bind(this)} />
        </div>
        <hr />
        App {this.props.incCounter + this.props.decCounter} <br />
        {/*Update in counter 7 -- bind on button to fire action with user input*/}

        Component State {this.state.counterValue}
        <div>
          <br />
          Event in App.jsx <br />
          {/*<input type="number" onChange={this.valueChange.bind(this)}/><br/>*/}
          {/*<button onClick={this.handelClick.bind(this)}>Increment User Input </button><br/>
          <button onClick={this.props.increment}>Increment</button><br/>*/}
          <button onClick={this.props.decrement}>Decrement value with 4</button><br />
          <button onClick={this.props.incrementAgain}>Increment value with 3</button><br />

        </div>
      </div>
    );
  }
}

// connect function will wrap component and attached properties
// from mapStateToProps into App component
// Update in coutner 4 -- sending mapDispatchToProps in connect
export default connect(mapStateToProps, mapDispatchToProps)(App);