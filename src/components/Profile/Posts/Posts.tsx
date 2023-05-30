import React, {FC, memo} from 'react';
import {Post} from './Post/Post';
import styles from './Posts.module.scss';
import {PostDataType, ProfileAPIType} from '../../../redux/profile-reducer';
import {AddNewPostFormRedux, FormDataType} from './AddNewPostForm/AddNewPostForm';

export const Posts: FC<PostsPropsType> = memo(({profile, postsData, addPost, putLike, deletePost, reset}) => {
    const onAddPost = (values: FormDataType) => {
        addPost(profile?.userId as number, values.newPostText);
        reset('profileAddPostForm');
    };

    const onPutLike = (postID: string) => {
        profile && putLike(profile.userId, postID);
    };

    const onDeletePost = (postID: string) => {
        profile && deletePost(profile.userId, postID);
    };

    const postsElements = postsData.map(post => {
        return <Post key={post.id} post={post} onPutLike={onPutLike} onDeletePost={onDeletePost}/>;
    });

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
    putLike: (userID: number, postID: string) => void;
    deletePost: (userID: number, postID: string) => void;
    reset: (formName: string) => void;
    profile: ProfileAPIType | null
    postsData: Array<PostDataType>;
}

