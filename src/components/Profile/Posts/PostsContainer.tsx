import React from 'react';
import {addPost, deletePost, PostDataType, putReaction} from '../../../redux/profile-reducer';
import {Posts} from './Posts';
import {AppStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {reset} from 'redux-form';

type mapStateToPropsType = {
    postsData: PostDataType[];
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
    };
};

export const PostsContainer = connect(mapStateToProps, {addPost, putReaction, deletePost, reset})(Posts);