import './App.css';
import './nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import initials_logo from './initials_logo.png';

function Nav({toggleTheme, theme}) {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div className="nav">
      <nav className='navbar'>
      <div className='nav-container'>
      <div className="logo">
        <Link to="/"> <img class="rk-logo"       
       src={initials_logo}/> </Link>
      </div>


      <div className={`App ${theme}`}>
      <button onClick={toggleTheme}> ☀️ | 🌙 </button>
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
          </ul>
        </div>
        </div>
      </nav>

    </div>
  );
}

export default Nav;