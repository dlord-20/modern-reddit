import React from 'react';
import styles from './userpost.module.css';

// import { useSelector } from 'react-redux';
// import { selectIsLoading, selectIsRejected } from '../redditAPI/redditAPISlice';


export default function UserPost(props) {
    const title = props.title;
    const url = props.url;
    const thumbnail = props.thumbnail;
    const score = props.score;
    const selftext = props.selftext;
    const author = props.author;
    const body = props.body;

    const handleImageInput = () => {
        if(thumbnail === 'Loading...') {
            return <div className={styles.loadingRedditThumbnail}></div>
        }
        if(thumbnail !== null && thumbnail !== 'nsfw' && thumbnail !== 'default' && thumbnail !== 'default' && thumbnail !== 'spoiler' && thumbnail !== 'self' && thumbnail !== '') {
            return <img src={thumbnail} alt='#'/>
        } 
        return null;
    }

    return (
        <div className={styles.container}>
            <p>{title}</p>
            <p>{url}</p>
            <p>{score}</p>
            <p>{author}</p>
            <p>{selftext}</p>
            <p>{body}</p>
            {handleImageInput()}
        </div>
    );
}