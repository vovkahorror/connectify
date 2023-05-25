import React, {memo} from 'react';
import {Post} from './Post/Post';
import styles from './Posts.module.scss';
import {PostsDataType} from '../../../redux/profile-reducer';
import {AddNewPostFormRedux, FormDataType} from './AddNewPostForm/AddNewPostForm';
import {useDispatch} from 'react-redux';
import {reset} from 'redux-form';

export const Posts = memo((props: PostsPropsType) => {
    const dispatch = useDispatch();

    const postsElements = props.postsData.map(post => {
        return <Post key={post.id} message={post.message} date={post.date}/>;
    });

    const onAddPost = (values: FormDataType) => {
        props.addPost(props.userID, values.newPostText);
        dispatch(reset('profileAddPostForm'));
    };

    return (
        <div className={styles.postsSection}>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    );
});

type PostsPropsType = {
    addPost: (userID: number, newPostText: string) => void;
    userID: number;
    postsData: Array<PostsDataType>;
}

