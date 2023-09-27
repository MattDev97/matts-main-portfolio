import './Projects.css';

import ProjectTile from './ProjectTile/ProjectTile';
import ProjectsJSON from './projects.json';

function Projects() {
    return (
        <div className="project-tiles_list grid gap-2 md:mx-16 grid-cols-1 md:grid-cols-2">
            {
                ProjectsJSON.map((item, index) => {
                    return <ProjectTile selfIndex={index} project={item}></ProjectTile>
                })
            }
        </div>
    );
}

export default Projects;