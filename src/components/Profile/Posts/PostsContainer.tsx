import React from "react";
import {addPostAC, PostsDataType} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import { Dispatch } from "redux";

type mapStateToPropsType = {
    postsData: PostsDataType[];
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText));
        },
    };
};

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);