import './App.css';
import { TypeAnimation } from 'react-type-animation';


function About() {
  return (
    <div className="Home">

      <h1>About Rafia</h1>
      <TypeAnimation className='typing-animation'
      sequence={[
        'I am a coffee addict.', 
        1000, // Waits 1s
        'I make a playlist for every situation.', 
        2000, 
        'I am a rom-com aficionado.',
        2000, 
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
    />

    <br></br>
      These are a few of my favorite things:

    <div className='concerts'>  Going to live shows:
    </div>
    
    <div className='Spotify-latest'>Lately I've been listening to:
    </div>
         {/* <p>Check out what I'm listening to:</p>  */}
      {/* add spotify recent */}

      
    </div>

  );
}

export default About;