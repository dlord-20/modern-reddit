import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRedditFeed } from "../redditAPI/redditAPISlice";
import { 
    selectSearchValue,
    changeSearchValue
} from "./searchSlice";



const handleSearchChange = (dispatch, value) => {
    dispatch(changeSearchValue(value));
    dispatch(getRedditFeed({category:'', isDateRange: false, dateRange: '', limit: 11, subreddit: true, subredditName: value}));
}

export default function Search() {
    const searchValue = useSelector(selectSearchValue);
    const dispatch = useDispatch();


    return (
        <div>
            <input value={searchValue} type="text" placeholder="Search for a Subreddit" onChange={(e) => handleSearchChange( dispatch, e.target.value)}/>
        </div>
    )
}