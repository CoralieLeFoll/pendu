import './State.css';
import React, { Component } from 'react'

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tryNumber: 8,
      counter: 0
    };
  }

  addCounter() {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return (
      <div className="State">
          <p>{this.state.counter}</p>
          <p>Il vous reste {this.state.tryNumber - this.state.counter} essais</p>
      </div>
    );
  }
}

export default State;