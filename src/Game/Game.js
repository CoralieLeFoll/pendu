import './Game.css';
import Lettres from './Lettres/Lettres'
import Pendu from './Pendu/Pendu'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
      <h2>{word}</h2>
      {
        counter > 0 &&
        <Pendu counter = {counter}></Pendu>
      }
      {tryNb - counter > 0 &&
        <div>
          <Lettres counter = {callbackCounter} word = {word.toLowerCase()} win = {callbackWin}></Lettres>
          <p>Il vous reste {tryNb - counter} essais</p>
        </div>
      }

      {tryNb - counter === 0 &&
        <p>
          Perdu...
          <Button variant="contained" color="primary" onClick={() => window.location.reload()}> Rejouer </Button>
        </p>
      }
      {win &&
        <p>
          Gagné avec {tryNb - counter} points ! 
          Pour enregistrer votre score, entrez votre pseudo : 
          <TextField id="standard-basic" value={pseudo} onChange={handleChange}/>
          <Button variant="contained" color="primary" onClick={() => submit()}>Valider</Button>
        </p>}
    </div>
  );
}

export default Game;