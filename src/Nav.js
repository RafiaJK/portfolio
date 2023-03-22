import './App.css';
import './nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import initials_logo from './initials_logo.png';
import github_logo from './github_logo.png';
import './darkTheme.css';

function Nav({toggleTheme, theme}) {
  const [showNav, setShowNav] = useState(false)
  const [hideNav, setHideNav] = useState(true)

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  const minimizeNav = () => {
    setShowNav(showNav)
  }

  const [darkButton, setDarkButton] = useState(true)
  function toggleDarkMode(){
    setDarkButton(!darkButton)
    toggleTheme()
  }
  <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

  return (
    
    <div className="nav">

      <nav className='navbar'>
      <div className='nav-container'>
      <div className="logo">
        <Link to="/"> <img class="rk-logo"       
       src={initials_logo}/> </Link>
      </div>


      <div className={`App ${theme}`}>
      {!darkButton ? (
        <button className="button-darkmode" onClick={toggleDarkMode}>☀️</button>
      ) : (
        <button className="button-darkmode" onClick={toggleDarkMode}>🌙</button>
      )}
      </div>

      <div className="menu-icon" onClick={toggleNav}>

        <svg viewBox="0 0 100 80" width="30" height="25">
          <rect width="100" height="15" rx="8"></rect>
          <rect y="30" width="100" height="15" rx="8"></rect>
          <rect y="60" width="100" height="15" rx="8"></rect>
        </svg>
      </div>

        <div className={`navlinks ${showNav && 'active'}`}>
          <ul>
            <li><Link to="/about">About Rafia</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="https://www.linkedin.com/in/rafiakhandaker/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" className='linkedin-logo'/> </Link></li>    
            <li><Link to="https://github.com/RafiaJK/" target="_blank"><img src={github_logo} className='linkedin-logo'/> </Link></li>                            
                        
          </ul>
        </div>
        </div>
      </nav>

    </div>
  );
}

export default Nav;