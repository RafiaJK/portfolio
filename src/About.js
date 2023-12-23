import './App.css';
import { TypeAnimation } from 'react-type-animation';
import ConcertList from './ConcertList';
import './about.css'

function About() {
  return (
    <div className="Home">

      <h1>About Rafia</h1>
      <TypeAnimation className='typing-animation'
      sequence={[
        'I am a coffee addict.', 
        1000, // Waits 1s
        'I make a playlist for every mood.', 
        2000, 
        'I am a 00\'s rom-com aficionado.',
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

    <h4>These are a few of my favorite things:</h4>

    <div className='favorites-list'>
      <ul>
        <li>Discovering new music: 
            <a href='https://open.spotify.com/user/1238055695'> find me on Spotify</a>
          </li> 
        <li>Baking</li> 
        <li>Going for runs</li> 
        <li>Rewatching Gossip Girl</li> 
        <li>Going to concerts:</li> 
      </ul>      
    </div>

    <div className='concerts'> 
    <ConcertList/>
    </div>
      

    {/* <div className='Spotify-latest'>Lately I've been listening to:
    add spotify top artists
    </div> */}

    {/* add google list for nyc coffee  */}

    </div>

  );
}

export default About;