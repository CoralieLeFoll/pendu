import './Game.css';
import Lettres from './Lettres/Lettres'
import Pendu from './Pendu/Pendu'
import React, { Component } from 'react'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.generateWord(),
      counter: 0,
      tryNb: 8,
      win: false,
      img: ""
    };
  }

  callbackCounter = (nb) => {
    this.setState({counter: this.state.counter + nb})
  }

  callbackWin = (win) => {
    this.setState({win})
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
        {
          this.state.counter > 0 &&
          <Pendu counter = {this.state.counter}></Pendu>
        }
        <Lettres counter = {this.callbackCounter} word = {this.state.word} win = {this.callbackWin}></Lettres>
        <p>Il vous reste {this.state.tryNb - this.state.counter} essais</p>
        {this.state.tryNb - this.state.counter === 0 &&
          <p>
            Perdu...
          </p>
        }
        {this.state.win &&
          <p>
            Gagné ! 
          </p>}
      </div>
    );
  }
}

export default Game;