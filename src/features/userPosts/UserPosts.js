import React, { useEffect } from "react";
import UserPost from "../userPost/UserPost";
import { getRedditFeed } from "../redditAPI/redditAPISlice";
import { useDispatch } from "react-redux";

export default function UserPosts() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getRedditFeed());
        // console.log('getRedditFeed')
    })

    return(
        <div>
            <p>UserPosts</p>
            <UserPost />
            <UserPost />
        </div>
    )
}