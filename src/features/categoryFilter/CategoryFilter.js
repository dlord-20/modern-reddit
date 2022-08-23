import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRedditFeed } from "../redditAPI/redditAPISlice";
import {
    selectCategoryFilter,
    changeCategory
} from './categoryFilterSlice';

const handleCategoryChange = (dispatch, value, category) => {
    dispatch(changeCategory(value));
    dispatch(getRedditFeed(category, false, 'Today', 10, false, ''));
}

export default function CategoryFilter() {
    const category = useSelector(selectCategoryFilter);
    const dispatch = useDispatch();

    return (
        <div>
            <label>
                <select value={category} onChange={(e) => handleCategoryChange(dispatch, e.target.value, category)}>
                    <option value="hot">Hot</option>
                    <option value="new">New</option>
                    <option value="popular">Popular</option>
                    <option value="top">Top</option>
                    <option value="rising">Rising</option>
                </select>
            </label>
        </div>
    )
}


