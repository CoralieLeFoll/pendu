import './Lettres.css';
import React, { Component } from 'react'

class Lettres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLetter: "",
      lettersList: [],
      lettersInWord: this.composeWord()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  composeWord() {
    var word = []
    for (var i = 0; i < this.props.word.length; i++) {
       word.push({letter: this.props.word[i], find: false})
    }
    return word
  }

  handleChange(event) {
    this.setState({currentLetter: event.target.value});
  }

  checkIfWin() {
    const tabLetter = this.state.lettersInWord.filter(l => {return l.find == true})
    if(tabLetter.length === this.state.lettersInWord.length) {
      this.props.win(true)
    }
    else {
      this.props.win(false)
    }
  }

    submit() {
    if(this.isLetter(this.state.currentLetter)) {
        if(this.state.lettersList.includes(this.state.currentLetter)) {
            alert("Lettre déjà ajoutée")
        }
        else if(this.props.word.includes(this.state.currentLetter)) {
          alert("Lettre trouvée !")
          var lettersInWord = this.state.lettersInWord
          lettersInWord.forEach(l => {
            if(l.letter === this.state.currentLetter) {
              l.find = true
            }
          });
          this.setState({lettersInWord})
          this.setState({lettersList: [...this.state.lettersList, this.state.currentLetter]});
          this.checkIfWin()
        }
        else {
            this.setState({lettersList: [...this.state.lettersList, this.state.currentLetter]});
            this.props.counter(1);
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
        <div className="listOfLetters">
        <ul>
        {
          this.state.lettersInWord.map(l => {
            if(l.find) {
              return <li key={Math.random()}> {l.letter} </li>
            }
            else {
              return <li key={Math.random()}> - </li>
            }
          })
        }
        </ul>
        </div>
        <p> Lettres ajoutées </p>  
        <ul>
        {this.state.lettersList.map(letter => {
            return <li key={letter}>{letter}</li>
        })}
        </ul>
      </div>
    );
  }
}

export default Lettres;