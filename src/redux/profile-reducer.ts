import { Dispatch } from "redux";
import {ActionsTypes} from "./redux-store";
import {usersAPI} from "../api/api";

export type PhotosProfileAPIType = {
    small: string | null;
    large: string | null;
}
export type ContactsProfileAPIType = {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
}
export type ProfileAPIType = {
    aboutMe: string | null;
    contacts: ContactsProfileAPIType;
    lookingForAJob: boolean | null;
    lookingForAJobDescription: string | null;
    fullName: string | null;
    userID: number;
    photos: PhotosProfileAPIType;
}
export type PostsDataType = {
    id: number;
    message: string;
    likes: number;
}
export type ProfilePageType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
    profile: ProfileAPIType | null;
}
//type ProfileReducerType = (state: ProfilePageType, action: ActionsTypes) => ProfilePageType;

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState: ProfilePageType = {
    postsData: [
        {id: 1, message: 'I\'m glad to see you here', likes: 5},
        {id: 2, message: 'Hello! How are you?', likes: 4},
        {id: 3, message: 'It\'s my firs post', likes: 3},
    ],
    newPostText: 'Hello',
    profile: null,
};

const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: state.newPostText,
                likes: 0,
            };
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''};

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state;
    }
};

export type AddPostActionType = {
    type: 'ADD-POST';
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT';
    newText: string;
}
export type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE';
    profile: ProfileAPIType;
}

export const addPostAC = (): AddPostActionType => ({type: ADD_POST});

export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setUserProfile = (profile: ProfileAPIType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userID: number) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userID).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export default profileReducer;