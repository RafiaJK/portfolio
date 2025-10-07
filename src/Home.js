import './App.css';
import './Home.css';
import profpic2 from './profpic2.jpg'

import { TypeAnimation } from 'react-type-animation';
import cityscape from './cityscape.jpg'
import Resume from './Resume'
import Services from './Services'

function Home() {
  return (
    
    <div className="Home">


      <h1>Hi, I'm Rafia Khandaker!</h1>

      <TypeAnimation className='typing-animation'
        sequence={[
          'I am a Digital Marketer.', 1500,
          'I am a Social Media Strategist.', 2000, // Waits 2s
          () => {
            console.log('Sequence completed'); // Place optional callbacks anywhere in the array
          }
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '1.5em', display: 'inline-block',
          padding: '0px'
         }}
      />
            <h4>I have 8+ years of experience in digital marketing and design, as well as a diverse background in project management, social media, and full-stack development.
            </h4>
      

      <div className='home-images-block'>
        <img src={cityscape} alt="nyc" className='nyc'></img>
        <img src={profpic2} alt="photo of Rafia" className='profilepic'></img>
        <h1 className='newyorkpin'>📍 New York</h1>
      </div>

      <div className='home-blurb'>

        <h2>Currently: 🚀 <a href="http://www.learnwithapprentice.com" target="_blank">Apprentice</a> </h2>
      
        <h4>At Apprentice, I'm helping early stage startups take off through content marketing, brand development, and launching data-backed campaigns. I have led multiple product pivots, redefined the brand persona, and built a creator marketplace that brought mentors and learners together in real life. </h4>

        <hr></hr>

        <h3>Based in NYC, I’m open to creative collaborations, contract roles, or full-time work with curiosity-driven teams building smart, human-first products. 
        </h3>
{/* 
        Always happy to explore new opportunities for collaboration - let's connect! */}
      </div>

      <hr></hr>

      <Services/>
      <hr></hr>

      <Resume/>
    </div>
  );
}

export default Home;
