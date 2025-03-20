import './App.css';
import { TypeAnimation } from 'react-type-animation';
// import ConcertList from './Archive/ConcertList';
import './about.css'
import profpic2 from './profpic2.jpg'
// import TravelGrid from'./Archive/TravelGrid';

function About() {
  return (
    <div className="Home">

      <h1>Hello World 👋</h1>


    <div class="column side">
    <h3>Nice to meet you!</h3>

    <div className='home-images-block'>
        <img src={profpic2} alt="photo of Rafia" className='profilepic2'></img>
      </div>
    <p className="aboutBlurb">When I'm not working, you can find me searching for my next concert, making playlists, trying new coffee shops, baking, running, and traveling.</p>
    
  </div>
  
  <div className="column main">
    <h2> </h2>


    <p>Check out some of the places I've been:</p>
    {/* <TravelGrid/> */}

    <p>See what I've had on repeat lately:</p>
    <iframe style= {{borderRadius:"16px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1EpgGw7nQAGKTa?utm_source=generator&theme=0" width="100%" height="152" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    
  </div>
  

    </div>

  );
}

export default About;