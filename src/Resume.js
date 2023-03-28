import './App.css';
import Rafia_Khandaker_Resume from './Rafia_Khandaker_Resume.pdf';
import React, {useState} from 'react';
import './Resume.css'

function Resume() {

  const [togglePDF, setTogglePDF] = useState(false);
  const handleClick = () => { setTogglePDF(!togglePDF)}

  return (
    <div className="Resume">
      <h1 >Resume</h1>

      <button className='pdf-button' onClick={handleClick}>View Resume PDF</button>
      {togglePDF ? <iframe src={Rafia_Khandaker_Resume} width="100%" height="450px"></iframe>
      : <></>
      }

<h3>Skills:</h3>
<div className="skills-blocks">
  <ul className="tech-skills-list"><b>Technical Skills:</b>
        <li>JavaScript</li>
        <li>React</li>
        <li>Ruby</li>
        <li>Rails</li>
        <li>Sinatra</li>
        <li>SQL</li>
        <li>PostgreSQL</li>
        <li>SQLite</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>

  <ul className='tech-skills-list'><b>Design Skills:</b>
    <li>Canva</li>
    <li>Figma</li>
    <li>Adobe Lightroom</li>
    <li>Adobe Illustrator</li>
    <li>Adobe PhotoShop</li>
  </ul>

  <ul className='tech-skills-list'><b>Social Media:</b>
    <li>Google Analytics</li>
    <li>Khoros</li>
    <li>Sentiment Analysis</li>
    <li>Pinterest Analytics</li>
    <li>Meta Business Suite</li>
  </ul>
  </div>

    <h3>Experience:</h3>
      <h4>
        <span class="resume-company">
          <a href="https://pch.com" target="_blank">Publishers Clearing House</a>
        </span>
      </h4>
      <h4>
        <span>Social Media Coordinator |</span> 2018-2022
      </h4>
        <ul>
        <li>Revamped and modernized brand styling through eye-catching visuals and engaging copy to millions of followers
          across Instagram, Facebook, Twitter, YouTube and Pinterest.</li>
        <li>Increased Instagram impressions and engagement over 100%, video views over 50%, and followers over 20%
          year-over-year.</li>
        <li>Advised a customer service team with other team leads ahead of new promotions and addressed user concerns.</li>
        <li>Led creative initiatives for e-commerce promotions and A/B testing in social media and acquisitions campaigns.</li>
        </ul>

        <h4>
        <span>Project Management Intern |</span> 2016-2018
        </h4>
        <ul>
          <li>Supported the Project Manager on the Interactive Development team, by assisting with mobile application launches, site updates, email campaigns, video shoots, event promotions, and social media initiatives.</li>
          <li>Launched and tracked 40-70 projects weekly, managing resources across a team of 25-30 creatives and coordinating project tasks and deadlines.</li>
          <li>Onboarded users to workflow management platforms and resolved technical issues.</li>
        </ul>
      

    <h3>Education:</h3>
      <p>-2022- <br></br> Flatiron School | Software Engineering Bootcamp</p>
      <p>-2018- <br></br> Stony Brook University | Bachelors Of Science in Information Systems</p>
   
    </div>
  );
}

export default Resume;
