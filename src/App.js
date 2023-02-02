import logo from './logo.svg';
import './App.css';
import Resume from './Resume';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p>homepage</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

<Router>
        <Switch>
          {/* <Route exact path="/">
          </Route> */}
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
        </Router>

    </div>
    // </BrowserRouter>
  );
  
}

export default App;
