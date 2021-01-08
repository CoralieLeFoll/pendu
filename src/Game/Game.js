import './Game.css';
import Lettres from './Lettres/Lettres'
import State from './State/State'
import React, { Component } from 'react'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.generateWord(),
      counter: 0
    };
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
        <Lettres></Lettres>
        <State></State>
      </div>
    );
  }
}

export default Game;