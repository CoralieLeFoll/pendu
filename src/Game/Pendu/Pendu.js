import './Pendu.css';
import React, { Component } from 'react'

class Pendu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var img = require(`../../images/pendu${this.props.counter}.png`).default
    return (
      <div className="Pendu">
          <img src={img} alt="statePendu"></img>
      </div>
    );
  }
}

export default Pendu;