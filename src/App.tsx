import GifExpertApp from './GifExpertApp';
import logo from './logo.svg';
import 'animate.css';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React
      </a>
    </header>

    <main className="App-main">
      <GifExpertApp />
    </main>
  </div>
);

export default App;
