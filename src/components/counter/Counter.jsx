import React , { Component } from 'react';


class Counter extends Component{
    constructor(){
        super()

        this.state={
            counterValue :0
        }
    }

   valueChange(event){
    this.setState({counterValue: parseInt(event.target.value)});
  }
 updateCounterWithInput(){
    this.props.update(this.state.counterValue);
    //this.props.incrementWithValue(this.state.counterVal);
  }

  // IMPORTANT
  // Update counter 12 -- this method will call this.props.update function which is
  // provided by App component to this Counter component 
  // like this <Counter update={this.updateCounter.bind(this)} />
  // this.updateCounter is funciton of App component and will be called when we
  // call this updateCounterWithOne
  updateCounterWithOne(){
    this.props.update(1);
  }


  render() {
    return (
      <div >
        <div>
            In Counter jsx
        </div>
        <div>
            Counter {this.props.counter}  
            <input type="number" onChange={this.valueChange.bind(this)}/><br/>
            <button onClick={this.updateCounterWithInput.bind(this)}>Increment User Input </button><br/>
            <button onClick={this.updateCounterWithOne.bind(this)}>Increment</button><br/>
        </div>
      </div>
    );
  }
}

export default Counter;