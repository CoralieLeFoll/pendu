import './Game.css';
import Lettres from './Lettres/Lettres'
import Pendu from './Pendu/Pendu'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Game() {
  const [word, setWord] = useState("");
  const [counter, setCounter] = useState(0);
  const [tryNb] = useState(8);
  const [win, setWin] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const handleChange = event => setPseudo(event.target.value);
  const history = useHistory();

  //BDD générée avec Mockoon
  /*
  {
  "words": "{{ faker 'random.word' }}"
  }
  */
  useEffect(() => {
      axios.get('http://127.0.0.1:3000/words/')
      .then(function (response) {
        setWord(response.data.words)

      }).catch(function (error) {
        console.log(error);
      });

  }, []);

  const callbackCounter = (nb) => {
    setCounter(counter + nb)
  }

  const callbackWin = (win) => {
    setWin(win)
  }

  const submit = () => {
    axios.post('http://127.0.0.1:3000/scores/', {
      pseudo,
      resultat: tryNb - counter
    })
    .then(function (response) {
      console.log(response)

    }).catch(function (error) {
      console.log(error);
    });
    history.push('/scores')
  }

  return (
    <div className="Game">
      <h1>Jeu du Pendu</h1>
      <p>{word}</p>
      {
        counter > 0 &&
        <Pendu counter = {counter}></Pendu>
      }
      <Lettres counter = {callbackCounter} word = {word.toLowerCase()} win = {callbackWin}></Lettres>
      <p>Il vous reste {tryNb - counter} essais</p>
      {tryNb - counter === 0 &&
        <p>
          Perdu...
          <button onClick={() => window.location.reload()}> Rejouer </button>
        </p>
      }
      {win &&
        <p>
          Gagné avec {tryNb - counter} points ! 
          Pour enregistrer votre score, entrez votre pseudo : 
          <input type="text" value={pseudo} onChange={handleChange} />
          <button onClick={() => submit()}>Valider</button>
        </p>}
    </div>
  );
}

export default Game;