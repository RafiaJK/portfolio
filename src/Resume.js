import './App.css';
import Rafia_Khandaker_Resume from './Rafia_Khandaker_Resume.pdf';
import React, {useState} from 'react';

function Resume() {

  const [togglePDF, setTogglePDF] = useState(false);
  const handleClick = () => { setTogglePDF(!togglePDF)}

  return (
    <div className="Resume">
      <h1>Resume</h1>

      <button onClick={handleClick}>View Resume PDF | Download</button>
      {togglePDF ? <iframe src={Rafia_Khandaker_Resume} width="100%" height="450px"></iframe>
      : <></>
      }

      <h3>Experience:</h3>
      <h4>
        <span class="resume-company">
          <a href="https://pch.com">Publishers Clearing House</a>
        </span>
      </h4>
      <h5>
        <span>Social Media Coordinator |</span> 2018-2022
        <ul>
        <li>Revamped and modernized brand styling through eye-catching visuals and engaging copy to millions of followers
          across Instagram, Facebook, Twitter, YouTube and Pinterest.</li>
        <li>Increased Instagram impressions and engagement over 100%, video views over 50%, and followers over 20%
          year-over-year.</li>
        <li>Advised a customer service team with other team leads ahead of new promotions and addressed user concerns.</li>
        <li>Led creative initiatives for e-commerce promotions and A/B testing in social media and acquisitions campaigns.</li>
        </ul>

        <span>Project Management Intern |</span> 2016-2018
        <ul>
          <li>Supported the Project Manager on the Interactive Development team, by assisting with mobile application launches, site updates, email campaigns, video shoots, event promotions, and social media initiatives.</li>
          <li>Launched and tracked 40-70 projects weekly, managing resources across a team of 25-30 creatives and coordinating project tasks and deadlines.</li>
          <li>Onboarded users to workflow management platforms and resolved technical issues.</li>
        </ul>
      </h5>

      <h3>Education:</h3>
      <p>-2022- <br></br> Flatiron School | Software Engineering Bootcamp</p>
      <p>-2018- <br></br> Stony Brook University | Bachelors Of Science in Information Systems</p>
   
    </div>
  );
}

export default Resume;
