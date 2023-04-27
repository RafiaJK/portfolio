import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './skills.css'

export default function ImageAvatars() {
    return (
        <div className='skills'>
            <b>Developer</b>
            <Stack className="skill-section" direction="row" spacing={3} justifyContent="center" alignItems="center">
                <Avatar variant="rounded" alt="JavaScript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
                <Avatar variant="rounded" alt="React" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                <Avatar variant="rounded" alt="Ruby" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" />
                <Avatar variant="rounded" alt="Rails" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" />
                <Avatar variant="rounded" alt="HTML" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
                <Avatar variant="rounded" alt="CSS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />
                <Avatar variant="rounded" alt="MySQL" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" />
                <Avatar variant="rounded" alt="PostgreSQL" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" />
                <Avatar variant="rounded" alt="SQLite" src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" />
                {/* <Avatar variant="rounded" alt="Python" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" /> */}
                <Avatar variant="rounded" alt="Git" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
            </Stack>

            <br></br>

            <b>Design</b>
            <Stack className="skill-section" direction="row" spacing={3} justifyContent="center" alignItems="center">
                <Avatar variant="rounded" alt="Canva" src="https://img.icons8.com/fluency/512/canva.png" />
                <Avatar variant="rounded" alt="Figma" src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" />
                <Avatar variant="rounded" alt="Lightroom" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/1024px-Adobe_Photoshop_Lightroom_CC_logo.svg.png?20200616120137" />
                <Avatar variant="rounded" alt="Illustrator" src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" />
                <Avatar variant="rounded" alt="Photoshop" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" />
            </Stack>
            <br></br>
        </div>
    );
}