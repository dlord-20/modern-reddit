import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRedditFeed } from "../redditAPI/redditAPISlice";
import {
    selectCategoryFilter,
    changeCategory
} from './categoryFilterSlice';

const handleCategoryChange = (dispatch, value) => {
    dispatch(changeCategory(value));
    dispatch(getRedditFeed({ category: value, isDateRange: false, dateRange: 'Today', limit: 10, subreddit: false, subredditName: ''}));
}

export default function CategoryFilter() {
    const category = useSelector(selectCategoryFilter);
    const dispatch = useDispatch();

    return (
        <div>
            <label>
                Category 
                <select value={category} onChange={(e) => handleCategoryChange(dispatch, e.target.value)}>
                    <option value="hot">Hot</option>
                    <option value="new">New</option>
                    <option value="top">Top</option>
                    <option value="rising">Rising</option>
                </select>
            </label>
        </div>
    )
}


