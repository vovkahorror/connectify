import React, {memo, useEffect} from 'react';
import {Post} from './Post/Post';
import styles from './Posts.module.scss';
import {PostDataType} from '../../../redux/profile-reducer';
import {AddNewPostFormRedux, FormDataType} from './AddNewPostForm/AddNewPostForm';
import {loadPosts} from '../../../utils/localStorage';

export const Posts = memo((props: PostsPropsType) => {
    const postsElements = props.postsData.map(post => {
        return <Post key={post.id} userID={props.userID} postID={post.id} message={post.message} date={post.date}/>;
    });

    const onAddPost = (values: FormDataType) => {
        props.addPost(props.userID, values.newPostText);
        props.reset('profileAddPostForm');
    };

    useEffect(() => {
        const savedPosts = loadPosts(props.userID);
        props.setPosts(savedPosts);
    }, []);

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
    setPosts: (updatedPostsData: PostDataType[]) => void;
    reset: (formName: string) => void;
    userID: number;
    postsData: Array<PostDataType>;
}

