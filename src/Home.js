import './App.css';
import './Home.css';
import profpic from './profpic.png'
import { TypeAnimation } from 'react-type-animation';
import CodingTimeline from './CodingTimeline';
import cityscape from './cityscape.jpg'
import Skills from './Skills'

function Home() {
  return (
    <div className="Home">
      <h1>Hi, I'm Rafia!</h1>

      <TypeAnimation className='typing-animation'
        sequence={[
          'I am a Software Engineer.',
          1000, // Waits 1s
          'I am a React Developer.',
          2000, // Waits 2s
          'I am a ',
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

      <div className='skills'>
        <Skills/>
      </div>

      <div className='prof-journey'>
        <p><b><i>Follow my professional journey - reduced to a timeline for your convenience:</i></b></p>
        <CodingTimeline />
      </div>

    </div>
  );
}

export default Home;
