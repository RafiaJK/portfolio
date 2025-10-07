import './App.css';
import ExpDesign from './ExpDesign';
import ExpDev from './ExpDev';
import ExpMktg from './ExpMktg';

function Projects() {


    return (
        <div className="Projects">
            <h2>Jump to:</h2>
            <h3> <a href="#webdesign">Web Design</a> | <a href="#socialmedia"> Social Media </a> | <a href="#swe">Software Engineering </a></h3>



            <h2 id="webdesign">Web Design</h2>
            <ExpDesign />


            <h2 id='socialmedia'>Social Media</h2>
            <ExpMktg />


            <h2 id='swe'>Software Engineering</h2>
            <ExpDev />


        </div>
    );
}

export default Projects;
