import './Projects.css';

import ProjectTile from './ProjectTile/ProjectTile';

function Projects() {
    return (
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
            <div>
                <ProjectTile></ProjectTile>
            </div>
            <div>
                <ProjectTile></ProjectTile>
            </div>
            <div>
                <ProjectTile></ProjectTile>
            </div>
            <div>
                <ProjectTile></ProjectTile>
            </div>
        </div>
    );
}

export default Projects;