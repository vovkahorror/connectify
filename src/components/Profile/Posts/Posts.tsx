import React, {memo} from 'react';
import {Post} from './Post/Post';
import styles from './Posts.module.css';
import {PostsDataType} from '../../../redux/profile-reducer';
import {AddNewPostFormRedux, FormDataType} from './AddNewPostForm/AddNewPostForm';

type PostsPropsType = {
    addPost: (newPostText: string) => void;
    postsData: Array<PostsDataType>;
}

export const Posts = memo((props: PostsPropsType) => {
    const postsElements = props.postsData.map(post => {
        return <Post key={post.id} message={post.message} likes={post.likes}/>;
    });

    const onAddPost = (values: FormDataType) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    );
});

