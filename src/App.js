import logo from './logo.svg';
import './App.css';
import Resume from './Resume';
import Home from './Home';
import About from './About';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {



  return (


    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/resume" element={<Resume/>} />
        <Route exact path="/about" element={<About/>} />

      </Routes>
      </BrowserRouter>

      <p>Designed & Built by Rafia Khandaker | 2023</p>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p>app page</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>




    </div>
    // </BrowserRouter>
  );

}

export default App;
