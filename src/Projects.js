import './App.css';

function Projects() {

    const demoStyle = {
        position: 'relative',
        paddingBottom: '56.514913657770805%',
        height: 0,
    }

    const demoFullSize = {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '90%',
        height: '100%',
    }

    return (
        <div className="Projects">
            <h1>Projects</h1>
            <p> </p>

            <h3>
                <span>Concert Buddy | </span> <a href="https://github.com/RafiaJK/concert-buddy" target="_blank">View Code</a>
            </h3>
            <h4>
                View concerts from your favorite artists, add yourself to a list of attendees, and meet fellow concertgoers in New York City.
            </h4>
                <ul>
                    <li>Implemented authentication and password protection in Rails for users to sign-up or login using tokens.</li>
                    <li>Designed a React frontend and cohesive styling elements through Figma.</li>
                    <li>Built out a full CRUD functionality for users to personalize their accounts.</li>
                </ul>
            
            <div style={demoStyle}><iframe src="https://www.loom.com/embed/f5d11dd1012e4979aa00ed4229557c05" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={demoFullSize}></iframe></div>

            <h3>
                <span>FiDi Dining Guide | </span> <a href="https://github.com/RafiaJK/flatiron-FiDi-Dining" target="_blank">View Code</a> 
            </h3>
            <h4>
                Single-page application with searchable listings of restaurants, cafes, and bars in the Financial District, Manhattan.
            </h4> 
                <ul>
                    <li>Constructed client-side routes with React Router and RESTful routing conventions.</li>
                    <li>Features search function to filter by type of establishment, street address, or name.</li>
                    <li>Developed an API of location listings in a SQLite database with the ability to persist data for new listings.</li>
                </ul>
            
            <div style={demoStyle}><iframe src="https://www.loom.com/embed/0c6e2872954647edb93a54f3b38b32f8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={demoFullSize}></iframe></div>
        </div>
    );
}

export default Projects;
