import logo from './logo.svg';
import './App.css';
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          joshkr.com is currently in development
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made in React
        </a>
      </header> */}

      <Dashboard />
    </div>
  );
}

export default App;
