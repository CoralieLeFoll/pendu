import logo from './images/pendu.jpg';
import './Home.css';
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => history.push('/game')}>
          Commencer une partie !
        </button>
      </header>
    </div>
  );
}

export default Home;