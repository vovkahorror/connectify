import React, {FC} from 'react';
import styles from './Post.module.css';
import {PostDataType} from '../../../../redux/profile-reducer';

export const Post: FC<PostPropsType> = ({post, onPutReaction, onDeletePost}) => {
    const putLikeHandler = () => onPutReaction(post.id, 'likes');

    const putDislikeHandler = () => onPutReaction(post.id, 'dislikes');

    const deletePostHandler = () => onDeletePost(post.id);

    return (
        <div className={styles.item}>
            <img src="https://www.terminal-a.com.ua/wp-content/uploads/2017/05/Koala.jpg" alt=""/>
            <span>{post.message}</span> <span>Date: {new Date(post.date).toLocaleDateString()}</span>
            <button onClick={putLikeHandler}>Like: {post.likes.length}</button>
            <button onClick={putDislikeHandler}>Dislike: {post.dislikes.length}</button>
            <button onClick={deletePostHandler}>Delete</button>
        </div>
    );
};

export type PostPropsType = {
    post: PostDataType;
    onPutReaction: (postID: string, reactions: 'likes' | 'dislikes') => void;
    onDeletePost: (postID: string) => void;
}