import JobCard from "./JobCard/JobCard";
import experienceJSON from "./experience.json";

function Experience() {
    console.dir(experienceJSON);
    return (
        <div>
            <div className="mt-4">
                {
                    experienceJSON.map((item) => {
                        return <div className="mt-4">
                            <JobCard job={item}></JobCard>
                        </div>
                    })
                }
            </div>
        </div>
        
    )
}

export default Experience;