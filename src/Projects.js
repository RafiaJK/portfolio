import './App.css';
import ExpDesign from './ExpDesign';
// import './Projects.css';
import ExpDev from './ExpDev'; 
import ExpMktg from './ExpMktg';

function Projects() {


    return (
        <div className="Projects">
            <h2>Social Media</h2>
            <ExpMktg/>

            {/* <h2>Design</h2>
            <ExpDesign/> */}

            <h2>Software Engineering</h2>
            <ExpDev/>

         
        </div>
    );
}

export default Projects;
