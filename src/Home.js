import logo from './images/pendu.jpg';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Commencer une partie !
        </p>
      </header>
    </div>
  );
}

export default Home;