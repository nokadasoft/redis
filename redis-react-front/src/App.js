import React, { Component } from 'react';
import './App.css';

var domain = "http://192.168.1.97:3001/";

class ButtonReset extends React.Component {
  handleClick1() {
    fetch(domain + "redisReset");
  }

  render() {
    return (
      <button onClick={() => this.handleClick1()} style={{float:'left'}}>
        Reset
      </button>
    );
  }
 }

 class ButtonIncrement extends React.Component {
  handleClick2() {
    var addrInc = domain + "redisInc";
    console.log(addrInc);
    fetch(addrInc);
  }

  render() {
    return (
      <button onClick={() => this.handleClick2()} style={{float:'left'}}>
        Increment
      </button>
    );
  }
 }

 class ButtonGet extends React.Component {
  constructor() {
    super();
    this.state = { nb1: "-1" };
  }

  handleClick3() {
    this.setState({nb1: "-2"});

    fetch(domain + "redisGet")
    .then(response => response.json())
    .then(items =>  this.setState({nb1: JSON.stringify(items)}));
  }    
  
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick3()} style={{float:'left'}}>
          Get
        </button>
        <div style={{float:'left'}}>
            {this.state.nb1}
        </div>
      </div>
    );
  }
 }

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonReset />
        <ButtonIncrement />
        <ButtonGet />
      </div>
    );
  }
}

export default App;
