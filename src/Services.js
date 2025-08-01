import './App.css';
// import Rafia_Khandaker_Resume from './Rafia_Khandaker_Resume.pdf';
import './resume.css'

function Services() {

  return (
    <div className="Services">

      <h2 style={{marginBottom: "0px"}}>Services</h2>


      <div className="skills-blocks">
      <ul className='tech-skills-list'><b>❤️ Marketing</b>
          <li>Social Media Management</li>
          <li>Content Creation & Copywriting</li>
          <li>Digital Marketing Strategy</li>
        </ul>

        <ul className='tech-skills-list'><b>🎨 Design</b>
          <li>Branding</li>
          <li>Website Design</li>
          <li>UI/UX Design</li>
        </ul>

        <ul className='tech-skills-list'><b>📈 Analytics</b>
          <li>Meta Ads</li>
          <li>Sentiment Analysis</li>
          <li>Google Analytics</li>
        </ul>

      </div>

    </div>
  );
}

export default Services;
