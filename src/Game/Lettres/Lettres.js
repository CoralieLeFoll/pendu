import './Lettres.css';
import React, { Component } from 'react'

class Lettres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLetter: "",
      lettersList: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({currentLetter: event.target.value});
  }

    submit() {
    var error = ""
    if(this.isLetter(this.state.currentLetter)) {
        if(this.state.lettersList.includes(this.state.currentLetter)) {
            alert("Lettre déjà ajoutée")
        }
        else {
            this.setState({lettersList: [...this.state.lettersList, this.state.currentLetter]});
        }
    }
    else {
        alert("Veuillez entrer une lettre")
    }
    this.setState({currentLetter: ""});
  }

  isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  render() {
    return (
      <div className="Lettres">
        <p> Lettre : </p>
        <input type="text" value={this.state.currentLetter} onChange={this.handleChange} />
        <button onClick={() => this.submit()}>Valider</button>
      <p> Lettres ajoutées </p>  
      <ul>
      {this.state.lettersList.map(letter => {
          return <li>{letter}</li>
      })}
      </ul>
      </div>
    );
  }
}

export default Lettres;