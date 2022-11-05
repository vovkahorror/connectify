import React from "react";
import {addPostAC, PostsDataType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import { Dispatch } from "redux";

type mapStateToPropsType = {
    postsData: PostsDataType[];
    newPostText: string
}
type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void;
    addPost: () => void;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text));
        },
        addPost: () => {
            dispatch(addPostAC());
        },
    };
};

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);