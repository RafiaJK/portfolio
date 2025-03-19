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

      <h1>Hi, I'm Rafia!</h1>

      <TypeAnimation className='typing-animation'
        sequence={[
          'I am a Digital Marketer.', 1500,
          'I am a Software Engineer.', 1500, 
          'I am a Social Media Expert.', 2000, // Waits 2s
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
        <img src={profpic2} alt="photo of Rafia" className='profilepic'></img>
        <h2 className='newyorkpin'>📍 New York</h2>
      </div>

      <div className='home-blurb'>
        <h2>Currently: 🚀 <a href="learnwithapprentice.com">Apprentice</a> </h2>

        <h4>I have 8 years of experience in digital marketing and design, as well as a diverse background in project management, social media, and full-stack development.</h4>
      </div>

      <Services/>
      <Resume/>
    </div>
  );
}

export default Home;
