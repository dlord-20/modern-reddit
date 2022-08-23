import React, { useEffect } from "react";
import UserPost from "../userPost/UserPost";
import { getRedditFeed } from "../redditAPI/redditAPISlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryFilter } from "../categoryFilter/categoryFilterSlice";

export default function UserPosts() {
    const dispatch = useDispatch();
    const category = useSelector(selectCategoryFilter);


    useEffect(() => {
        dispatch(getRedditFeed({category: 'hot', isDateRange: false, dateRange: 'Today', limit: 10, subreddit: false, subredditName: ''}));
        // console.log('getRedditFeed')
    }, category)

    return(
        <div>
            <p>UserPosts</p>
            <UserPost />
            <UserPost />
        </div>
    )
}