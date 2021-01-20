import logo from './images/pendu.jpg';
import './Home.css';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

function Home() {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <h1> Jeu du Pendu </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="primary" onClick={() => history.push('/game')}>
          Commencer une partie !
        </Button>
      </header>
    </div>
  );
}

export default Home;