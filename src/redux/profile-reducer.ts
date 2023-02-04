import {Dispatch} from 'redux';
import {ActionsTypes} from './redux-store';
import {profileAPI} from '../api/api';

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
    profile: ProfileAPIType | null;
    status: string;
}

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState: ProfilePageType = {
    postsData: [
        {id: 1, message: 'I\'m glad to see you here', likes: 5},
        {id: 2, message: 'Hello! How are you?', likes: 4},
        {id: 3, message: 'It\'s my firs post', likes: 3},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: action.newPostText,
                likes: 0,
            };
            return {...state, postsData: [...state.postsData, newPost]};

        case SET_STATUS:
            return {...state, status: action.status};

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        default:
            return state;
    }
};

export type AddPostActionType = {
    type: 'ADD-POST';
    newPostText: string
}
export type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE';
    profile: ProfileAPIType;
}
export type SetStatusActionType = {
    type: 'SET_STATUS';
    status: string;
}

export const addPostAC = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText});

export const setUserProfile = (profile: ProfileAPIType): SetUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile,
});

export const setStatus = (status: string): SetStatusActionType => ({
    type: SET_STATUS,
    status,
});

export const getUserProfile = (userID: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userID).then(response => {
            dispatch(setUserProfile(response.data));
        });
    };
};

export const getStatus = (userID: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userID).then(response => {
            dispatch(setStatus(response.data));
        });
    };
};

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    };
};

export default profileReducer;