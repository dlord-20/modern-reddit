import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRedditFeed } from "../redditAPI/redditAPISlice";
import {
    selectCategoryFilter,
    changeCategory
} from './categoryFilterSlice';

export default function CategoryFilter() {
    const category = useSelector(selectCategoryFilter);
    const dispatch = useDispatch();

    return (
        <div>
            <label>
                <select value={category} onChange={(e) => {dispatch(changeCategory(e.target.value)); dispatch(getRedditFeed(category))}}>
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


