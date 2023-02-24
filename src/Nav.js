import './App.css';
import './nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div className="nav">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <nav className='navbar'>

      <div className="logo">
        <Link to="/" >ADD LOGO/HOME</Link>
      </div>

        <div className="navlinks">
          <ul>
            <li><Link to="/about">About Rafia</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>

      </nav>

    </div>
  );
}

export default Nav;