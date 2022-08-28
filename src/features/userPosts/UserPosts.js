import React, { useEffect, useState } from "react";
import UserPost from "../userPost/UserPost";
import { getRedditFeed, selectIsLoading, selectIsRejected, selectRedditFeed } from "../redditAPI/redditAPISlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryFilter } from "../categoryFilter/categoryFilterSlice";
import styles from './userPosts.module.css';

export default function UserPosts() {
    const dispatch = useDispatch();
    const category = useSelector(selectCategoryFilter);
    const [ redditEndAddNum, setRedditEndAddNum ] = useState(10);



    useEffect(() => {
        dispatch(getRedditFeed({category: 'hot', isDateRange: false, dateRange: 'Today', limit: 100, subreddit: false, subredditName: ''}));
    }, []);

    const postsLoading = useSelector(selectIsLoading);
    const postsFailed = useSelector(selectIsRejected);
    const redditPosts = useSelector(selectRedditFeed);

    const handleRedditFeed = () => {
        const redditData = [];
        if(postsLoading) {
            for(let i = 0; i < 3; i++) {
                redditData.push(
                    <UserPost 
                        title='Loading...'
                        url='Loading...'
                        thumbnail='Loading...'
                        score='Loading...'
                        selftext='Loading...'
                        author='Loading...'
                        body='Loading...'
                    />
                )
            }
        } else if(postsFailed) {
            return <p>Failed to load posts :(</p>;
        } else if(!postsFailed && !postsLoading) {
            for(let i = 0; i < redditPosts.length && i < redditEndAddNum; i++) {
                const post = redditPosts[i];
                // console.log(redditPosts[i]);
                redditData.push (
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
        }
        return redditData;
    }

    const handleSeeMoreClick = () => {
        setRedditEndAddNum(redditEndAddNum + 10);
    }

    const handleSeeMoreButton = () => {
        if(redditEndAddNum < 100) {
            return (
                <div className={styles.buttonA} onClick={() => handleSeeMoreClick()}>
                    <p>See More</p>
                </div>
            )
        }
    }

    return(
        <div className={styles.container}>
            <p>UserPosts</p>
            {handleRedditFeed()}
            {handleSeeMoreButton()}
        </div>
    )
}