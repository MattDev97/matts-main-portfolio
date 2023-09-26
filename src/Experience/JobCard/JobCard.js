function JobCard(props) {
    console.dir(props);
    return (
        <div className="flex font-light">
            <div className="flex w-1/3">
                {<span>{props.job.startDate} - {props.job.endDate}</span>}
            </div>
            <div className="w-2/3">
                <h2 className="text-lg">{props.job.title}</h2>
                <h4>{props.job.companyName}</h4>
                {
                    props.job.description.map((item) => {
                        return <p className="mt-2">{item}</p>
                    })
                }
                <ul className="mt-2 flex flex-wrap">
                    {
                        props.job.skills.map((item) => {
                            return <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    {item}
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default JobCard;