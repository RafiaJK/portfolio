import './App.css';
import Rafia_Khandaker_Resume from './Rafia_Khandaker_Resume.pdf';
import React, { useState } from 'react';
import './resume.css'
// import Skills from './Skills'

function Resume() {

  const [togglePDF, setTogglePDF] = useState(false);
  const handleClick = () => { setTogglePDF(!togglePDF) }

  return (
    <div className="Resume">

      <button className='pdf-button' onClick={handleClick}>View or Download Resume PDF</button>

      {togglePDF ? <iframe src={Rafia_Khandaker_Resume} width="100%" height="450px"></iframe>
        : <></>
      }


    </div>
  );
}

export default Resume;
