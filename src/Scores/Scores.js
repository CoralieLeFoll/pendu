import { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Score() {

  const [scores,setScores] = useState([]);

  //BDD générée avec Mockoon
    /*
    {
    "scores": [
      {{# repeat (queryParam 'total' '10') }}
        {
          "userId": "{{ faker 'random.number' min=10000 max=100000 }}",
          "pseudo": "{{ faker 'name.firstName' }}",
          "result": "{{ faker 'random.number' min=0 max=8 }}"
  }
      {{/ repeat }}]
  }
  */
  useEffect(() => {
      axios.get('http://127.0.0.1:3000/scores/')
      .then(function (response) {
        setScores(response.data.scores)
      }).catch(function (error) {
        console.log(error);
      });

  }, []);

    return (
      <div className="Score">
        <h1>Scores</h1>

        <List component="nav" aria-label="Scores">
        <ListItem>
            <ListItemText primary="PSEUDO | "/>
            <ListItemText primary="| SCORE" />
          </ListItem>
        {
            scores.map(score => {
              return <ListItem key={score.userId}>
                <ListItemText primary={score.pseudo}/>
                <ListItemText primary={score.result}/>
                </ListItem>
            })
          }
      </List>
      </div>
    );
}

export default Score;