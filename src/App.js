import logo from './logo.svg';
import './App.css';
import { Form } from "./components/Form"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <Form/>

        <a
          className="App-link"
          href="https://create-react-app.dev/docs/getting-started/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Could you please take a look at this doc?
        </a>
      </header>
    </div>
  );
}

export default App;
