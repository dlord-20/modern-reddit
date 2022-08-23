import React, { useEffect } from "react";
import UserPost from "../userPost/UserPost";
import { getRedditFeed, selectIsLoading, selectIsRejected, selectRedditFeed } from "../redditAPI/redditAPISlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryFilter } from "../categoryFilter/categoryFilterSlice";
import styles from './userPosts.module.css';

export default function UserPosts() {
    const dispatch = useDispatch();
    const category = useSelector(selectCategoryFilter);



    useEffect(() => {
        dispatch(getRedditFeed({category: 'hot', isDateRange: false, dateRange: 'Today', limit: 10, subreddit: false, subredditName: ''}));
    }, []);

    const postsLoading = useSelector(selectIsLoading);
    const postsFailed = useSelector(selectIsRejected);
    const redditPosts = useSelector(selectRedditFeed);

    const handleRedditFeed = () => {
        if(postsLoading) {
            return <p>Loading</p>;
        } else if(postsFailed) {
            return <p>Failed to load</p>;
        } else if(!postsFailed && !postsLoading) {
            const redditData = [];
            for (const post of redditPosts) {
                redditData.push(
                    <UserPost 
                        title={post.title}
                        url={post.url}
                        thumbnail={post.thumbnail}
                        score={post.score}
                        selftext={post.selftext}
                        author={post.author}
                        body={post.body}
                    />
                )
            }

            return redditData;
        }
    }

    return(
        <div className={styles.container}>
            <p>UserPosts</p>
            {handleRedditFeed()}
        </div>
    )
}