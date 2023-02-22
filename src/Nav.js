import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">

      <nav className='navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Rafia</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>

    </div>
  );
}

export default Nav;