import React from 'react';
import {addPost, PostsDataType} from '../../../redux/profile-reducer';
import {Posts} from './Posts';
import {AppStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';

type mapStateToPropsType = {
    postsData: PostsDataType[];

}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
    };
};

export const PostsContainer = connect(mapStateToProps, {addPost})(Posts);