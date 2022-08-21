import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
                <select value={category} onChange={(e) => dispatch(changeCategory(e.target.value))}>
                    <option value="Trending">Trending</option>
                    <option value="New">New</option>
                    <option value="Popular">Popular</option>
                </select>
            </label>
        </div>
    )
}


