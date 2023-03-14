import './App.css';
import './nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import initials_logo from './initials_logo.png';
import github_logo from './github_logo.png';

function Nav({toggleTheme, theme}) {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
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
          <p>hmbrgr</p>
          {/* add image for hamburger menu */}
      </div>

        <div className={`navlinks ${showNav && 'active'}`}>
          <ul>
            <li><Link to="/about">About Rafia</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="https://www.linkedin.com/in/rafiakhandaker/"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" className='linkedin-logo'/> </Link></li>    
            <li><Link to="https://github.com/RafiaJK/"><img src={github_logo} className='linkedin-logo'/> </Link></li>                            
                        
          </ul>
        </div>
        </div>
      </nav>

    </div>
  );
}

export default Nav;