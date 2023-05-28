import React, {FC, memo} from 'react';
import {Post} from './Post/Post';
import styles from './Posts.module.scss';
import {PostDataType, ProfileAPIType} from '../../../redux/profile-reducer';
import {AddNewPostFormRedux, FormDataType} from './AddNewPostForm/AddNewPostForm';

export const Posts: FC<PostsPropsType> = memo(({profile, postsData, addPost, reset}) => {
    const postsElements = postsData.map(post => {
        return <Post key={post.id} userID={profile && profile.userId} postID={post.id}
                     message={post.message}
                     date={post.date}/>;
    });

    const onAddPost = (values: FormDataType) => {
        addPost(profile?.userId as number, values.newPostText);
        reset('profileAddPostForm');
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
    reset: (formName: string) => void;
    profile: ProfileAPIType | null
    postsData: Array<PostDataType>;
}

