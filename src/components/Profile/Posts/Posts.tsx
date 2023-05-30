import React, {FC, memo} from 'react';
import {Post} from './Post/Post';
import styles from './Posts.module.scss';
import {PostDataType, ProfileAPIType} from '../../../redux/profile-reducer';
import {AddNewPostFormRedux, FormDataType} from './AddNewPostForm/AddNewPostForm';

export const Posts: FC<PostsPropsType> = memo(({
                                                   profile,
                                                   postsData,
                                                   userPhoto,
                                                   addPost,
                                                   putReaction,
                                                   deletePost,
                                                   reset,
                                               }) => {
    const onAddPost = (values: FormDataType) => {
        addPost(profile?.userId as number, values.newPostText);
        reset('profileAddPostForm');
    };

    const onPutReaction = (postID: string, reactions: 'likes' | 'dislikes') => {
        profile && putReaction(profile.userId, postID, reactions);
    };

    const onDeletePost = (postID: string) => {
        profile && deletePost(profile.userId, postID);
    };

    const postsElements = postsData.map(post => {
        return <Post key={post.id} post={post} onPutReaction={onPutReaction} onDeletePost={onDeletePost}/>;
    });

    return (
        <div className={styles.postsSection}>
            <AddNewPostFormRedux initialValues={{userPhoto}} onSubmit={onAddPost}/>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
});

type PostsPropsType = {
    addPost: (userID: number, newPostText: string) => void;
    putReaction: (userID: number, postID: string, action: 'likes' | 'dislikes') => void;
    deletePost: (userID: number, postID: string) => void;
    reset: (formName: string) => void;
    profile: ProfileAPIType | null;
    userPhoto?: string | null;
    postsData: Array<PostDataType>;
}

