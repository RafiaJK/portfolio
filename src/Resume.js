import './App.css';
import Rafia_Khandaker_Resume from './Rafia_Khandaker_Resume.pdf';
import React, { useState } from 'react';
import './resume.css'
import Skills from './Skills'

function Resume() {

  const [togglePDF, setTogglePDF] = useState(false);
  const handleClick = () => { setTogglePDF(!togglePDF) }

  return (
    <div className="Resume">

      <button className='pdf-button' onClick={handleClick}>View or Download Resume PDF</button>

      {togglePDF ? <iframe src={Rafia_Khandaker_Resume} width="100%" height="450px"></iframe>
        : <></>
      }
      {/* 
      <h3>Skills:</h3>
      <div className="skills-blocks">
        <ul className="tech-skills-list"><b>Developer:</b>
          <li>JavaScript</li>
          <li>React</li>
          <li>Ruby</li>
          <li>Rails</li>
          <li>Sinatra</li>
          <li>SQL</li>
          <li>PostgreSQL</li>
          <li>SQLite</li>
          <li>HTML/CSS</li>
        </ul>

        <ul className='tech-skills-list'><b>Design:</b>
          <li>Canva</li>
          <li>Figma</li>
          <li>Lightroom</li>
          <li>Illustrator</li>
          <li>PhotoShop</li>
        </ul>

        <ul className='tech-skills-list'><b>Social Media:</b>
          <li>Khoros</li>
          <li>Google Analytics</li>
          <li>Sentiment Analysis</li>
          <li>Pinterest Analytics</li>
          <li>Meta Business Suite</li>
        </ul>
      </div> */}

    </div>
  );
}

export default Resume;
