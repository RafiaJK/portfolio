import './App.css';
// import Rafia_Khandaker_Resume from './Rafia_Khandaker_Resume.pdf';
import './resume.css'
// import Skills from './Skills'

function ResumeExpanded() {

  return (
    <div className="Resume">
      <h1>Resume</h1>
      
      {/* <h3>Skills:</h3>
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
      </div> */}

      <h2>Experience</h2>

      <h4>
        <span class="resume-company">
          <a href="https://learnwithapprentice.com" target="_blank">Apprentice</a>
        </span>
      </h4>
      <h4>
        <span>Marketing Lead |</span> 2024-Present
      </h4>
      <ul>
        <li>Managed end-to-end creative projects for social media and offline marketing, overseeing content creation, campaign execution, and brand consistency across multiple channels.</li>
        <li>Launched and optimized Google Ads and Meta (Facebook & Instagram) campaigns to drive user acquisition and brand awareness.</li>
        <li>Built and managed the company website through HubSpot, creating custom landing pages for promotions and a marketplace for users.</li>
        <li>Designed and developed the user onboarding experience using Figma and FlutterFlow.</li>
      </ul>

      <h4>
        <span class="resume-company">
          <a href="https://pch.com" target="_blank">Publishers Clearing House</a>
        </span>
      </h4>
      <h4>
        <span>Social Media Manager |</span> 2018-2022
      </h4>
      <ul>
        <li>Achieved a 100% boost in year-over-year Instagram performance in impressions and
          engagement, along with a 50% rise in video views and 20% growth in followers through
          data-driven strategies and targeted adjustments.</li>
        <li>Elevated brand presence by overhauling visuals and crafting compelling narratives, resulting in a substantial increase in social media followers across major platforms (Instagram, Facebook, Twitter, YouTube, Pinterest).</li>
        <li>Proactively addressed customer service concerns in collaboration with product owners, preempting issues ahead of new promotions and attending to user queries effectively.</li>
        <li>Spearheaded creative campaigns for e-commerce promotions on Facebook Shops, alongside  managing A/B testing for acquisition initiatives.</li>
        <li>Mentored interns on analytics tools and trend research, providing hands-on training for optimal execution and fostering a culture of continuous learning and development.</li>
      </ul>

      <h4>
        <span>Project Management Intern (Interactive Development Team) |</span> 2016-2018
      </h4>
      <ul>
        <li>Managed 40-70 weekly projects, effectively prioritizing tasks and deadlines, and coordinated 25-30 creative resources via weekly status meetings.</li>
        <li>Assisted launching mobile apps, site updates, event promotions, and coordinating social media initiatives contributing to the successful execution of cross-functional projects.
        </li>
        <li>Successfully onboarded new users to workflow management platforms and resolved technical issues across multiple levels of business.</li>
      </ul>


      <h2>Education</h2>
      <h4>Flatiron School</h4>
      <p>Full Stack Development Bootcamp: Ruby on Rails and JavaScript program</p>
      <h4>Stony Brook University</h4>
      <p>Bachelors Of Science in Information Systems, Specialization in Business & Economics</p>

    </div>
  );
}

export default ResumeExpanded;
