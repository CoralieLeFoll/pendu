import './Lettres.css';
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Lettres(props) {

  const [currentLetter, setCurrentLetter] = useState("");
  const [lettersList, setLettersList] = useState([]);
  const [lettersInWord, setLettersInWord] = useState([]);
  const handleChange = event => setCurrentLetter(event.target.value);

  useEffect(() => {
    var word = []
    for (var i = 0; i < props.word.length; i++) {
       word.push({letter: props.word[i], find: false})
    }
    setLettersInWord(word)
  }, [props.word]);

  const checkIfWin = () => {
    const tabLetter = lettersInWord.filter(l => {return l.find === true})
    if(tabLetter.length === lettersInWord.length) {
      props.win(true)
    }
    else {
      props.win(false)
    }
  }

  const submit = (props) => {
    if(isLetter(currentLetter)) {
        if(lettersList.includes(currentLetter)) {
            alert("Lettre déjà ajoutée")
        }
        else if(props.word.includes(currentLetter)) {
          lettersInWord.forEach(l => {
            if(l.letter === currentLetter) {
              l.find = true
            }
          });
          setLettersInWord(lettersInWord)
          setLettersList([...lettersList, currentLetter]);
          checkIfWin()
        }
        else {
          setLettersList([...lettersList, currentLetter]);
          props.counter(1);
        }
    }
    else {
        alert("Veuillez entrer une lettre")
    }
    setCurrentLetter("");
  }

  const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  return (
    <div className="Lettres">
      <p> Lettre : </p>
      <TextField id="standard-basic" value={currentLetter} onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={() => submit(props)}>Valider</Button>
      <div className="listOfLetters">
      <ul>
      {
        lettersInWord.map(l => {
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
        {
          lettersList.length > 0 &&
          <div className="lettersAdded">
            <h3> Lettres ajoutées </h3>  
            <ul>
            {lettersList.map(letter => {
                return <li key={letter}>{letter}</li>
            })}
            </ul>
          </div>
        }
    </div>
  );
}

export default Lettres;