import React from "react";
import { 
    useSelector, 
    useDispatch 
} from "react-redux";
import { 
    selectDateRangeFilter,
    changeDateRange
 } from "./dateRangeFilterSlice";
 import { getRedditFeed } from '../redditAPI/redditAPISlice';

export default function DateRangeFilter() {

    const dispatch = useDispatch();
    const dateRange = useSelector(selectDateRangeFilter);
    
    const handleDateRangeChange = (value) => {
        dispatch(changeDateRange(value));
        dispatch(getRedditFeed({ category: value, isDateRange: true, dateRange: value, limit: 100, subreddit: false, subredditName: ''}));
    }

    return (
        <div>
            <label>
                <select value={dateRange}  onChange={(e) => handleDateRangeChange(e.target.value)}>
                    <option value="now">Now</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="year">This Year</option>
                    <option value="all">All Time</option>
                </select>
            </label>
        </div>
    )
}