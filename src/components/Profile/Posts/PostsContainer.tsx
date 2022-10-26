import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {EmptyObject, Store} from "redux";
import {ActionsTypes, StateType} from "../../../redux/redux-store";

type PostsContainerPropsType = {
    store: Store<EmptyObject & { profilePage: never; dialogsPage: never; sidebar: any; }, ActionsTypes>;
}

export const PostsContainer = (props: PostsContainerPropsType) => {
    const state: StateType = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const onPostChange = (text: string) => {
        const action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Posts
            updateNewPostText={onPostChange}
            addPost={addPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
        />
    );
};