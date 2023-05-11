import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

const initialState: ProfilePageType = {
    postsData: [
        {id: 1, message: 'I\'m glad to see you here', likes: 5},
        {id: 2, message: 'Hello! How are you?', likes: 4},
        {id: 3, message: 'It\'s my firs post', likes: 3},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: action.newPostText,
                likes: 0,
            };
            return {...state, postsData: [...state.postsData, newPost]};

        case DELETE_POST:
            return {...state, postsData: state.postsData.filter(post => post.id !== action.postID)};

        case SET_STATUS:
            return {...state, status: action.status};

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case SAVE_PHOTO_SUCCESS:
            const profile = state.profile && {...state.profile, photos: action.photos};
            return {...state, profile};

        default:
            return state;
    }
};

export const addPostAC = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText});

export const deletePostAC = (postID: number): DeletePostActionType => ({type: DELETE_POST, postID});

export const setUserProfile = (profile: ProfileAPIType): SetUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile,
});

export const savePhotoSuccess = (photos: PhotosProfileAPIType): SavePhotoSuccessActionType => ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
});

export const setStatus = (status: string): SetStatusActionType => ({
    type: SET_STATUS,
    status,
});

export const getUserProfile = (userID: number) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.getProfile(userID);
        dispatch(setUserProfile(response.data));
    };
};

export const getStatus = (userID: number) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.getStatus(userID);
        dispatch(setStatus(response.data));
    };
};

export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    };
};

export const savePhoto = (photoFile: File) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.savePhoto(photoFile);

        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    };
};

// types
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

export type AddPostActionType = {
    type: 'profile/ADD_POST';
    newPostText: string
}
export type DeletePostActionType = {
    type: 'profile/DELETE_POST';
    postID: number;
}
export type SetUserProfileActionType = {
    type: 'profile/SET_USER_PROFILE';
    profile: ProfileAPIType;
}
export type SetStatusActionType = {
    type: 'profile/SET_STATUS';
    status: string;
}
export type SavePhotoSuccessActionType = {
    type: 'profile/SAVE_PHOTO_SUCCESS';
    photos: PhotosProfileAPIType;
}

export type ActionsType =
    AddPostActionType
    | DeletePostActionType
    | SetUserProfileActionType
    | SetStatusActionType
    | SavePhotoSuccessActionType;
export default profileReducer;