import JobCard from "./JobCard/JobCard";
import experienceJSON from "./experience.json";

import './Experience.css';

function Experience() {
    console.dir(experienceJSON);
    return (
        <div>
            <div className="md:mt-4 md:px-10 pt-7 experience_wrapper">
                {
                    experienceJSON.map((item) => {
                        return <div className="mb-28">
                            <JobCard job={item}></JobCard>
                        </div>
                    })
                }
            </div>
        </div>
        
    )
}

export default Experience;