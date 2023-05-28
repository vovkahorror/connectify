import React, {FC} from 'react';
import styles from './Post.module.css';
import {useDispatch} from 'react-redux';
import {deletePost} from '../../../../redux/profile-reducer';

export const Post: FC<PostPropsType> = ({userID, postID, message, date}) => {
    const dispatch = useDispatch();

    const deletePostHandler = () => {
        if (userID) {
            dispatch(deletePost(userID, postID));
        }
    };

    return (
        <div className={styles.item}>
            <img src="https://www.terminal-a.com.ua/wp-content/uploads/2017/05/Koala.jpg" alt=""/>
            <span>{message}</span> <span>Likes: {new Date(date).toLocaleDateString()}</span>
            <button onClick={deletePostHandler}>Delete</button>
        </div>
    );
};

export type PostPropsType = {
    userID: number | null;
    postID: string;
    message: string;
    date: string;
}