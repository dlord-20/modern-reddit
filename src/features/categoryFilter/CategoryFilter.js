import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDateRangeVisibility, changeVisibility } from "../dateRangeFilter/dateRangeVisibilitySlice";
import { getRedditFeed } from "../redditAPI/redditAPISlice";
import {
    selectCategoryFilter,
    changeCategory
} from './categoryFilterSlice';


export default function CategoryFilter() {
    const category = useSelector(selectCategoryFilter);
    const dateRangeVisible = useSelector(selectDateRangeVisibility);
    const dispatch = useDispatch();

    const handleCategoryChange = (value) => {
        dispatch(changeCategory(value));
        dispatch(getRedditFeed({ category: value, isDateRange: false, dateRange: 'Today', limit: 10, subreddit: false, subredditName: ''}));
        if(value === 'top') {
            //Call a function that shows the date range filter
            dispatch(changeVisibility(true));
        } else if(dateRangeVisible !== false) {
            dispatch(changeVisibility(false));
        }
    }

    return (
        <div>
            <label>
                Category 
                <select value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
                    <option value="hot">Hot</option>
                    <option value="new">New</option>
                    <option value="top">Top</option>
                    <option value="rising">Rising</option>
                </select>
            </label>
        </div>
    )
}


