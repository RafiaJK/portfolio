import './App.css';
import './Home.css';
import profpic from './profpic.png'
import { TypeAnimation } from 'react-type-animation';
import CodingTimeline from './CodingTimeline';
import cityscape from './cityscape.jpg'
import Skills from './Skills'
import Resume from './Resume'
import React, { useState } from 'react';
import Rafia_Khandaker_Resume from './Rafia_Khandaker_Resume.pdf';

function Home() {
  return (
    <div className="Home">
      <h1>Hi, I'm Rafia!</h1>

      <TypeAnimation className='typing-animation'
        sequence={[
          'I am a Software Engineer.', 1500, 
          'I am a Social Media Specialist.', 2000, // Waits 2s
          'I am a Digital Marketer.', 1500,
          () => {
            console.log('Sequence completed'); // Place optional callbacks anywhere in the array
          }
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '1.5em', display: 'inline-block' }}
      />

      <div className='home-images-block'>
        <img src={cityscape} alt="nyc" className='nyc'></img>
        <img src={profpic} alt="photo of Rafia" className='profilepic'></img>
        <h2 className='newyorkpin'>📍 New York</h2>
      </div>

      <div className='home-blurb'>
        <h4>Results-oriented professional with a diverse background in project management, social media, digital marketing strategy, and technical proficiency in full-stack development.</h4>
      </div>

      <Resume/>

      {/* <div className='skills'>
        <Skills/>
      </div> */}

      {/* <div className='prof-journey'>
        <p><b><i>Follow my professional journey - reduced to a timeline for your convenience:</i></b></p>
        <CodingTimeline />
      </div> */}

    </div>
  );
}

export default Home;
