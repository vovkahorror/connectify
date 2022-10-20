import React from "react";
import {Post} from "./Post/Post";
import styles from './Posts.module.css';
import {AddPostActionType, PostsDataType, UpdateNewPostTextActionType} from "../../../redux/state";

type PostsPropsType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void;
}

export const Posts = (props: PostsPropsType) => {
    const postsElements = props.postsData.map(post => {
        return <Post key={post.id} message={post.message} likes={post.likes}/>;
    });
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        const text = newPostElement.current?.value;
        text && props.dispatch({type: 'ADD-POST'});
    };

    const onPostChange = () => {
        const text = newPostElement.current?.value;
        if (text || text === '') {
            const action: UpdateNewPostTextActionType = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
            props.dispatch(action);
        }
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};