import './App.css';
import './resume.css'

import badge from './Asana workflow specialist badge.png'

function ResumeExpanded() {

  return (
    <div className="Resume">
      <h1>Resume</h1>


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
        <li>Led the end-to-end development of the company’s digital presence from inception, handling design, marketing, and growth strategy.</li>
        <li>Managed all social media and offline marketing, overseeing content creation, campaign execution, and brand consistency across multiple channels.</li>
        <li>Launched and optimized Google Ads and Meta (Facebook & Instagram) campaigns to drive early user acquisition and brand awareness.</li>
        <li>Developed the company website from scratch through HubSpot, creating custom landing pages for promotions and a marketplace for users.</li>
        <li>Designed and built onboarding screens for the app using Figma and FlutterFlow to create a seamless user experience.</li>
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


      <h2>Certifications</h2>
      <h4>Asana Workflow Specialist</h4>
      <i>Collaborative Work Management Certification</i>
      <p>Learned to design and implement enterprise-level workflows for a team, as well as research-backed change management strategies to ensure teams adopt new workflows.</p>
      <a href='https://certifications.asana.com/de8ea9f1-c723-4277-9136-2b635cf2bc18' target='blank'> <img src={badge} /> </a>

      {/* resume pdf button in app.js */}
      <br></br> <br></br>
      <h2>Take a resume to go:</h2>
    </div>
  );
}

export default ResumeExpanded;
