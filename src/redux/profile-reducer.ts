import {ActionsTypes, ProfilePageType} from "./store";

export type AddPostActionType = {
    type: 'ADD-POST';
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT';
    newText: string;
}

type ProfileReducerType = (state: ProfilePageType, action: ActionsTypes) => ProfilePageType;

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer: ProfileReducerType = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: state.newPostText,
                likes: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
};

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;