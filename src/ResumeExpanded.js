import './App.css';
import './resume.css'

import badge from './Asana workflow specialist badge.png'

function ResumeExpanded() {

  return (
    <div className="Resume">

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
        <li>Developed and implemented marketing roadmaps, brand positioning, and social content pillars to strengthen the
startup’s brand identity and streamline campaign execution.</li>
        <li>Designed onboarding flows, landing pages, and community engagement strategies, activating 100+ instructors and
learners through events, resources, and outreach.</li>
        <li>Launched and optimized Google Search campaigns driving 6.5K+ impressions with CTRs up to 7.3% and CPCs as low as
$0.18, outperforming benchmarks.</li>
        <li>Managed Meta Ads campaigns with 15K+ impressions and averaging 6.7K reach per campaign, achieving
cost-per-result as low as $0.40.</li>

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
        <li>Grew organic Instagram engagement 100% YoY and increased followers by 20% through data-supported content
strategies and influencer partnerships.</li>
<li>Owned reporting for multi-platform campaigns, monitoring KPIs such as engagement, reach, CTR, and conversions;
produced monthly and ad hoc reports for leadership.</li>
<li>Led national promotional campaigns and daily content calendars across Facebook, Instagram, and YouTube for a digital
audience of 5M+, producing campaign briefs, copy, and creative assets.</li>
        <li>Managed community engagement for national campaigns, including an annual multichannel initiative with St. Jude
Children’s Research Hospital that surpassed donation goals.</li>

        <li>Responded to social posts coordinating customer support escalations, improving response time and audience
sentiment, in a consistent brand voice.</li>
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
