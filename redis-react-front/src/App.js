import React, { Component } from 'react';
import './App.css';

// enable docker and run redis to be available for back-end

//var domain = "http://192.168.1.97:3001/";
var domain = "http://localhost:3001/";

class ButtonReset extends React.Component {
  handleClick1() {
    fetch(domain + "redisReset");
  }

  render() {
    return (
      <button onClick={() => this.handleClick1()} style={{ float: 'left' }}>
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
      <button onClick={() => this.handleClick2()} style={{ float: 'left' }}>
        Increment
      </button>
    );
  }
}

class ButtonGet extends React.Component {
  constructor() {
    super();
    this.state = {
      displayValue: "-1"
    };
  }

  handleClick3() {
    fetch(domain + "redisGet")
      .then(response => response.json())
      .then(data => this.setState({ displayValue: data }));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick3()} style={{ float: 'left' }}>
          Get
        </button>
        <div style={{ float: 'left' }}>
          {this.state.displayValue}
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
