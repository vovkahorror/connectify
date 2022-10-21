import React from "react";
import {Post} from "./Post/Post";
import styles from './Posts.module.css';
import {
    ActionsTypes,
    addPostActionCreator,
    PostsDataType,
    updateNewPostTextActionCreator,
} from "../../../redux/state";

type PostsPropsType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
    dispatch: (action: ActionsTypes) => void;
}

export const Posts = (props: PostsPropsType) => {
    const postsElements = props.postsData.map(post => {
        return <Post key={post.id} message={post.message} likes={post.likes}/>;
    });
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        const text = newPostElement.current?.value;
        text && props.dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        const text = newPostElement.current?.value;
        if (text || text === '') {
            const action = updateNewPostTextActionCreator(text);
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