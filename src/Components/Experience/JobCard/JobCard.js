import FormattedDate from '../../../Utilities/FormattedDate';
import './JobCard.css';

function JobCard(props) {
    
    console.dir(props);
    return (
        <div className="flex flex-wrap font-light">
            <div className="font-extrabold job-rect__wrapper md:w-1/6 mt-1 md:mb-0 mb-5 md:mx-0 mx-auto">
                <div className="job-card__rect mb-2">
                    <img src={props.job.image} alt={props.job.company} />
                </div>
                <div className="date-labels">
                    <p>
                        {props.job.startDate}
                    </p>
                    <p>
                        -
                    </p>
                    <p>
                        {props.job.endDate}
                    </p>
                </div>
                
            </div>
            <div className="md:w-5/6">
                <a className="flex company-link m-auto md:m-0 md:justify-start justify-center" href={props.job.link} target="_blank">
                    <h4 className="md:text-left  text-center">{props.job.companyName}</h4>
                    <i class="ml-1 flex my-auto las la-external-link-square-alt la-1x"></i>
                </a>
                
                <h2 className="text-lg font-bold text-center md:text-left">{props.job.title}</h2>
                {
                    props.job.description.map((item) => {
                        return <p className="mt-2 md:text-justify text-center">{item}</p>
                    })
                }
                <ul className="mt-2 flex flex-wrap">
                    {
                        props.job.skills.map((item) => {
                            return (
                                <li className="md:mr-1.5 mt-2 md:ml-0 m-auto">
                                    <div className="skill-pill flex items-center rounded-full px-3 py-1 font-extrabold">
                                        {item}
                                    </div>
                                </li>
                            )
                            
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default JobCard;