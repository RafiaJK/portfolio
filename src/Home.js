import './App.css';
import './Home.css';
import self from './self.png'
import { TypeAnimation } from 'react-type-animation';
import CodingTimeline from './CodingTimeline';

function Home() {
  return (
    <div className="Home">
      <h1>Hi, I'm Rafia!</h1>

      <TypeAnimation
      sequence={[
        'I am a software engineer.', 
        1000, // Waits 1s
        'I am a React developer.', 
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

      <img src={self} alt="photo of Rafia" className='profilepic'></img>
      <h3>📍 New York</h3>

      <CodingTimeline/>

      {/* <p> 
        Coding has been a career years in the making - from 2007 when I'd update my MySpace weekly to make sure my Top 8 stayed up to date, my latest favorite song played, and my layout matched my latest mood.
        A couple short years later I found myself on Tumblr, once again customizing my theme to my latest favorite aesthetic.  
        <br></br>
        It was while I was working in social media that I realized I loved creating for a living and finding new ways to catch peoples attention on their screens. 
       </p> */}


   
    </div>
  );
}

export default Home;
