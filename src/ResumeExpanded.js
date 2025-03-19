import './App.css';
// import Rafia_Khandaker_Resume from './Rafia_Khandaker_Resume.pdf';
import './resume.css'
// import Skills from './Skills'

function ResumeExpanded() {

  return (
    <div className="Resume">
      <h1>Resume</h1>
      
      <h3>Skills:</h3>
      <div className="skills-blocks">
        <ul className="tech-skills-list"><b>Developer:</b>
          <li>JavaScript</li>
          <li>React</li>
          <li>Ruby</li>
          <li>Rails</li>
          <li>Sinatra</li>
          <li>SQL</li>
        </ul>

        <ul className='tech-skills-list'><b>Design:</b>
          <li>HTML/CSS</li>
          <li>Figma</li>
          <li>Lightroom</li>
          <li>Illustrator</li>
          <li>Photoshop</li>
          <li>Canva</li>
        </ul>

        <ul className='tech-skills-list'><b>Social Media:</b>

          <li>Google Analytics</li>
          <li>Sentiment Analysis</li>
          <li>Khoros</li>
          <li>Pinterest Analytics</li>
          <li>Meta Business Suite</li>
        </ul>
      </div>

      <h3>Experience:</h3>
      <h4>
        <span class="resume-company">
          <a href="https://pch.com">Publishers Clearing House</a>
        </span>
      </h4>
      <h4>
        <span>Social Media Coordinator |</span> 2018-2022
      </h4>
      <ul>
        <li>Achieved a 100% boost in year-over-year Instagram performance in impressions and
          engagement, along with a 50% rise in video views and 20% growth in followers through
          data-driven strategies and targeted adjustments.</li>
        <li>Elevated brand presence by overhauling visuals and crafting compelling narratives, resulting in a substantial increase in social media followers across major platforms (Instagram, Facebook, Twitter, YouTube, Pinterest).</li>
        <li>Proactively addressed customer service concerns in collaboration with product owners, preempting issues ahead of new promotions and attending to user queries effectively.</li>
        <li>Spearheaded creative campaigns for e-commerce promotions on Facebook Shops, alongside  managing A/B testing for acquisition initiatives.</li>
        <li>Mentored interns, imparting expertise in analytics tools and trend research, ensuring hands-on training for optimized execution.</li>
      </ul>

      <h4>
        <span>Project Management Intern |</span> 2016-2018
      </h4>
      <ul>
        <li>Managed 40-70 weekly projects, effectively prioritizing tasks and deadlines, and coordinated 25-30 creative resources via weekly status meetings.</li>
        <li>Supported the Project Manager on the Interactive Development team by assisting with mobile application launches, site updates, email campaigns, video shoots, event promotions, and social media initiatives.</li>
        <li>Successfully onboarded new users to workflow management platforms and resolved technical issues across multiple levels of business.</li>
      </ul>


      <h3>Education:</h3>
      <h4>Flatiron School</h4>
      <p>Software Engineering Bootcamp</p>
      <h4>Stony Brook University</h4>
      <p>Bachelors Of Science in Information Systems, Specialization in Business & Economics</p>

    </div>
  );
}

export default ResumeExpanded;
