import { useState, useEffect } from 'react';
import './App.css';
import Resume from './Resume';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import Projects from "./Projects";
import Socials from './Socials';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './darkTheme.css';


function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (

    <div className="App">
        <BrowserRouter>
          <Nav toggleTheme={toggleTheme} />

          <div className="content-container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/resume" element={<Resume />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/socials" element={<Socials />} />
            </Routes>
          </div>
        </BrowserRouter>

        {/* <div className='designed-by'>
      <a href="https://github.com/RafiaJK/portfolio"  target="_blank"><p>Designed & Built by Rafia Khandaker | 2023</p> </a>
    </div> */}
    </div>

  );

}

export default App;
