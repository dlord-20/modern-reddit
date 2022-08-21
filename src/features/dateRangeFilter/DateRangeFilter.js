import React, {useState} from "react";

export default function DateRangeFilter() {
    const [ dateRangeFilter, setDateRangeFilter ] = useState('24 Hours');
    
    const handleDateChange = (event) => {
        setDateRangeFilter(event.target.value);
    }

    return (
        <div>
            <label>
                <select value={dateRangeFilter} onChange={handleDateChange}>
                    <option value="24 Hours">24 Hours</option>
                    <option value="3 Days">3 Days</option>
                    <option value="Week">Week</option>
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                </select>
            </label>
        </div>
    )
}