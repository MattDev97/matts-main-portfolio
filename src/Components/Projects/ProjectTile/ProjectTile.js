import './ProjectTile.css';
import { Tilt } from 'react-tilt';

import { useState } from "react";
import ProjectImagesExport from '../../../Assets/ProjectImages/ProjectImagesExport';

function ProjectTile(props) {
    const [active, setActive] = useState(false);

    const handleMouseEnter = () => {
        setActive(true);
    }

    const handleMouseLeave = () => {
        setActive(false);
    }

    return (
        <Tilt 
            className="Tilt" 
            options={{ max: 10, speed: 100, scale: 1.01, reset: true }} 
            style={{ height: '100%', width: '100%' }}
        >
            <div data-active={active} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={"project-tile "} >
                <img src={ProjectImagesExport[props.project.image]}></img>
                <div className="project-tile__content px-2 pt-1 pb-1">
                    
                    <a href={props.project.liveLink} className="external-link" target="_blank">
                        <div className="project-tile__content__title flex justify-between">
                            <div className="external-link_text font-semibold text-sm md:text-md font-bold text-white">
                                {props.project.title}
                            </div>
                            <div className="external-link_icon flex">
                                <i class="las la-external-link-square-alt la-1x text-white"></i>
                            </div>
                            
                        </div>
                        <div className="project-tile__content__description font-light text-md  text-white">
                            {props.project.description}
                        </div>
                    </a>
                    
                    <div className="project-tile__content__footer flex justify-between">
                        <div className="flex skills">
                            {props.project.skills.map((item) => {
                                return <div>
                                    <i className={getBrandIcon(item)}></i>
                                </div>
                                })
                            }
                        </div>
                        <a href={props.project.githubLink} target="_blank">
                            <div className="flex github-link">
                                <i class="lab la-github m-auto la-2x text-white"></i>
                                <div className="github-link_text m-auto text-m">
                                    Github
                                </div>
                            </div>
                        </a>
                        
                        
                    </div>
                </div>
            </div>
        </Tilt>
        
    )
}

const getBrandIcon = (brand) => {
    switch(brand) {
        case 'HTML5':
            return "lab la-html5 m-auto la-2x text-white";
        case 'CSS3':
            return "lab la-css3-alt m-auto la-2x text-white";
        case 'Javascript':
            return "lab la-js-square m-auto la-2x text-white";
        case 'React':
            return "lab la-react m-auto la-2x text-white";
        default:
            return '';
    }
}

export default ProjectTile;