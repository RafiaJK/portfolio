import './App.css';

function Projects() {
    return (
        <div className="Projects">
            <h1>Projects</h1>
            <p> </p>

            <h4>
                <span>Concert Buddy</span> <a href="https://github.com/RafiaJK/concert-buddy">View Code</a> | PLACEHOLDER View Demo
            </h4>
            <h5>
                View concerts from your favorite artists, add yourself to a list of attendees, and meet fellow concertgoers in New York City.
                <ul>
                    <li>Implemented authentication and password protection in Rails for users to sign-up or login using tokens.</li>
                    <li>Designed a React frontend and cohesive styling elements through Figma.</li>
                    <li>Built out a full CRUD functionality for users to personalize their accounts.</li>
                </ul>
            </h5>

            <h4>
                <span>FiDi Dining Guide</span> <a href="https://github.com/RafiaJK/flatiron-FiDi-Dining">View Code</a> | PLACEHOLDER View Demo
            </h4>
            <h5>
                Single-page application with searchable listings of restaurants, cafes, and bars in the Financial District, Manhattan.
                <ul>
                    <li>Constructed client-side routes with React Router and RESTful routing conventions.</li>
                    <li>Features search function to filter by type of establishment, street address, or name.</li>
                    <li>Developed an API of location listings in a SQLite database with the ability to persist data for new listings.</li>
                </ul>
            </h5>
        </div>
    );
}

export default Projects;
