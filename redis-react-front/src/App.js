import React, { Component } from 'react';
import './App.css';

// enable docker and run redis to be available for back-end
// sudo docker start redis

//var domain = "http://localhost:3001/";
const domain = "http://192.168.1.19";
const portNodeJS = 3001;
const portCoreCS = 3002;

class ButtonReset extends React.Component {
  handleClick(url) {
    console.log("DELETE " + url);
    fetch(url, { method: 'delete' })
      .then(response => response);
  }

  render() {
    var url = this.props.address + "/api/redis";
    return (
      <button onClick={() => this.handleClick(url)} style={{ float: 'left' }}>
        Reset
      </button>
    );
  }
}

class ButtonIncrement extends React.Component {
  handleClick(url) {
    console.log("PUT " + url);
    fetch(url, { method: 'put' })
      .then(response => response);
  }

  render() {
    var url = this.props.address + "/api/redis";
    return (
      <button onClick={() => this.handleClick(url)} style={{ float: 'left' }}>
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

  handleClick(url) {
    console.log("GET " + url);
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ displayValue: data }));
  }

  render() {
    var url = this.props.address + "/api/redis";
    return (
      <div>
        <button onClick={() => this.handleClick(url)} style={{ float: 'left' }}>
          Get
        </button>
        <div style={{ float: 'left' }}>
          {this.state.displayValue}
        </div>
      </div>
    );
  }
}

class DockerLesson extends Component {
  render() {
    var addressNodeJS = domain + ":" + portNodeJS;
    var addressCoreCS = domain + ":" + portCoreCS;
    return (
      <div className="App" >
        <table style={{ width: '400px' }}>
        <tbody>
          <tr>
            <td>
              NodeJS [address: {addressNodeJS}]
            </td>
            <td>
              <ButtonReset address={addressNodeJS}/>
              <ButtonIncrement address={addressNodeJS}/>
              <ButtonGet address={addressNodeJS}/>
            </td>
          </tr>
          <tr>
            <td>
              CoreSC [address: {addressCoreCS}]
            </td>
            <td>
              <ButtonReset address={addressCoreCS}/>
              <ButtonIncrement address={addressCoreCS}/>
              <ButtonGet address={addressCoreCS}/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DockerLesson;
