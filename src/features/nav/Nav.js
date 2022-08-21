import React, { useState} from "react";

export default function Nav() {
    const [ categoryFilter, setCategoryFilter ] = useState('Trending');
    const [ dateRangeFilter, setDateRangeFilter ] = useState('24 Hours');


    const handleCategoryChange = (event) => {
        setCategoryFilter(event.target.value);
    }

    const handleDateChange = (event) => {
        setDateRangeFilter(event.target.value);
    }

    return (
        <div>
            <p>Navigation</p>
            <form>
                <label>
                    <select value={categoryFilter} onChange={handleCategoryChange}>
                        <option value="Trending">Trending</option>
                        <option value="New">New</option>
                        <option value="Popular">Popular</option>
                    </select>
                </label>
                <label>
                    <select value={dateRangeFilter} onChange={handleDateChange}>
                        <option value="24 Hours">24 Hours</option>
                        <option value="3 Days">3 Days</option>
                        <option value="Week">Week</option>
                        <option value="Month">Month</option>
                        <option value="Year">Year</option>
                    </select>
                </label>
            </form>
        </div>
    )
}