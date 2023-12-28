import './App.css';
import { TypeAnimation } from 'react-type-animation';
import ConcertList from './ConcertList';
import './about.css'
import profpic2 from './profpic2.jpg'
import TravelGrid from'./TravelGrid';

function About() {
  return (
    <div className="Home">

      <h1>About Rafia</h1>
      {/* <TypeAnimation className='typing-animation'
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
    /> */}

    <div class="column side">
    <h2>Hello World</h2>

    <div className='home-images-block'>
        {/* <img src={cityscape} alt="nyc" className='nyc'></img> */}
        <img src={profpic2} alt="photo of Rafia" className='profilepic2'></img>
      </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
  </div>
  
  <div className="column main">
    <h2> </h2>
    <p>In my spare time I love listening to music and seeing live shows, traveling, baking, and running.</p>

    <p>Where I've been:</p>
    <TravelGrid/>
    <ul>
      <li>Portugal</li>
    </ul>

    <p>What I'm listening to:</p>
    <iframe style= {{borderRadius:"16px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1EpgGw7nQAGKTa?utm_source=generator&theme=0" width="100%" height="152" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    
  </div>
  


    {/* <div className='concerts'> 
    <ConcertList/>
    </div> */}

    {/* add google list for nyc coffee  */}

    </div>

  );
}

export default About;