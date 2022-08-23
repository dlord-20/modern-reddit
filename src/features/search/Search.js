import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRedditFeed } from "../redditAPI/redditAPISlice";
import { 
    selectSearchValue,
    changeSearchValue
} from "./searchSlice";



const handleSearchChange = (dispatch, value, searchValue) => {
    dispatch(changeSearchValue(value));
    dispatch(getRedditFeed('', false, '', 10, true, searchValue));
}

export default function Search() {
    const searchValue = useSelector(selectSearchValue);
    const dispatch = useDispatch();


    return (
        <div>
            <input value={searchValue} type="text" placeholder="Search for a Subreddit" onChange={(e) => handleSearchChange( dispatch, e.target.value, searchValue)}/>
        </div>
    )
}