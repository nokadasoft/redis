// https://github.com/mrcoles/node-react-docker-compose

import React, { Component } from 'react';
import './App.css';

//https://www.linkedin.com/pulse/dockerizing-your-react-app-mike-sparr/
//var envVariable1 = process.env.REACT_APP_SOME_ENV_VARIABLE_1;

var prefixNode = "/vnode";
var prefixCore = "/vcore";

class ButtonReset extends React.Component {
  handleClick(url) {
    console.log("DELETE " + url);
    fetch(url, { method: 'delete' })
      .then(response => response);
  }

  render() {
    var url = this.props.prefix + "/api/redis";
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
    var url = this.props.prefix + "/api/redis";
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
    var url = this.props.prefix + "/api/redis";
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
    return (
      <div className="App" >
        <table style={{ width: '400px' }}>
        <tbody>
          <tr>
            <td>
              NodeJS [prefix: {prefixNode}]
            </td>
            <td>
              <ButtonReset prefix={prefixNode}/>
              <ButtonIncrement prefix={prefixNode}/>
              <ButtonGet prefix={prefixNode}/>
            </td>
          </tr>
          <tr>
            <td>
              CoreSC [prefix: {prefixCore}]
            </td>
            <td>
              <ButtonReset prefix={prefixCore}/>
              <ButtonIncrement prefix={prefixCore}/>
              <ButtonGet prefix={prefixCore}/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DockerLesson;
