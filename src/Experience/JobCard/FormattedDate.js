function FormattedDate(props) {
    const formatDate = () => {
        let startDate = new Date(props.start);
        let endDate = props.end != "Present" ? new Date(props.end) : "Present";

        let difference;
        if(endDate == "Present") {
            difference = getDifferenceInYearsAndMonths(startDate, new Date());
        } else {
            difference = getDifferenceInYearsAndMonths(startDate, endDate);
        }

        let startDateString = startDate.toLocaleDateString('en-us', { year:"numeric", month:"short"});
        let endDateString = endDate == 'Present' ? 'Present' : endDate.toLocaleDateString('en-us', { year:"numeric", month:"short"});
        
        let yearDiff = (difference.years != 0 ? difference.years + ' ' + (difference.years > 1 ? 'years' : 'year') : '');
        let monthDiff = difference.months != 0 ? difference.months + ' ' + (difference.months > 1 ? 'months' : 'month') : '';
        if(yearDiff != '' && monthDiff != '') {
            yearDiff += ', ';
        }
        return `${startDateString} - ${endDateString} (${yearDiff}${monthDiff})`;
    }

    const getDifferenceInYearsAndMonths = (date1, date2) => {
        // Ensure date1 is the earlier date and date2 is the later date
        if (date1 > date2) {
          [date1, date2] = [date2, date1];
        }
      
        let years = date2.getFullYear() - date1.getFullYear();
        let months = date2.getMonth() - date1.getMonth();
      
        // Adjust years and months if date2 is earlier in the year
        if (months < 0) {
          years -= 1;
          months += 12;
        }
      
        // Handle edge case for same month but different days
        if (months === 0 && date2.getDate() < date1.getDate()) {
          years -= 1;
          months = 11;
        }
      
        return { years, months };
    }
    return (
        formatDate()
    )
}

export default FormattedDate;