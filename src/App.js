import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }
  increaseCount(){
    this.setState(
      function(prevState){
          return(
            {
              count:prevState.count+1
            }
          )
      }
    )
  }
  decreaseCount(){
    this.setState(
      function(prevState){
        if(this.state.count<0){
          return(
            {
              count:0
            }
          )
        }
        return(
          {
            count:prevState.count-1
          }
        )
      }
    )
  }

  render() {
    return (
      <div>
        <h1 id="output" style={{ marginBottom: '1rem' }} >{this.state.count}</h1>
        <button style={{ marginRight: '1rem' }} onClick={this.increaseCount}>
          +
        </button>
        <button onClick={this.decreaseCount}>-</button>
      </div>
    );
  }
}
export default App;
