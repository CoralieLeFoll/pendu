import './Game.css';
import Lettres from './Lettres/Lettres'
import React, { Component } from 'react'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.generateWord(),
      counter: 0,
      tryNb: 8
    };
  }

  callbackCounter = (nb) => {
    this.setState({counter: this.state.counter + nb})
    if(this.state.counter == this.state.tryNb - 1) {
      alert("Perdu")
      window.location.reload();
    }
  }

  generateWord() {
    //BDD plus tard
    const words = ["test", "bibliotheque", "cyclomoteur", "balancoire", "lampe", "ecole", "universite"]
    return words[Math.floor(Math.random() * words.length)];
  }

  render() {
    return (
      <div className="Game">
        <h1>Jeu du Pendu</h1>
        <p>{this.state.word}</p>
        <Lettres counter = {this.callbackCounter}></Lettres>
        <p>Il vous reste {this.state.tryNb - this.state.counter} essais</p>
      </div>
    );
  }
}

export default Game;