import {AnyAction, Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';
import {AppStateType} from './redux-store';
import {ThunkDispatch} from 'redux-thunk';
import {toggleIsFetching} from './app-reducer';
import {stopSubmit} from 'redux-form';
import {setUserPhoto} from './auth-reducer';
import {v1} from 'uuid';
import {postsAPI} from '../api/posts-api';

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SET_POSTS = 'profile/SET_POSTS';
const SET_IS_FOLLOWS = 'profile/SET_IS_FOLLOWS';
const SET_IS_FOLLOWING_IN_PROGRESS = 'profile/SET_IS_FOLLOWING_IN_PROGRESS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

const initialState: ProfilePageType = {
    postsData: [],
    profile: null,
    status: '',
    isFollows: false,
    isFollowingInProgress: false,
};

const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, postsData: [action.newPost, ...state.postsData]};

        case SET_POSTS:
            return {...state, postsData: [...action.updatedPostsData]};

        case SET_STATUS:
            return {...state, status: action.status};

        case SET_IS_FOLLOWS:
            return {...state, isFollows: action.isFollows};

        case SET_IS_FOLLOWING_IN_PROGRESS:
            return {...state, isFollowingInProgress: action.isFollowingInProgress};

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case SAVE_PHOTO_SUCCESS:
            const profile = state.profile && {...state.profile, photos: action.photos};
            return {...state, profile};

        default:
            return state;
    }
};

export const addPostToState = (newPost: PostDataType): AddPostToStateActionType => ({type: ADD_POST, newPost});

export const setPosts = (updatedPostsData: PostDataType[]): SetPostsActionType => ({
    type: SET_POSTS,
    updatedPostsData,
});

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

export const setIsFollows = (isFollows: boolean): SetIsFollowsActionType => ({
    type: SET_IS_FOLLOWS,
    isFollows,
});

export const setIsFollowingInProgress = (isFollowingInProgress: boolean): SetIsFollowingInProgressActionType => ({
    type: SET_IS_FOLLOWING_IN_PROGRESS,
    isFollowingInProgress,
});

export const getProfilePage = (userID: number) => {
    return async (dispatch: ThunkDispatch<AppStateType, any, AnyAction>) => {
        dispatch(toggleIsFetching(true));

        try {
            const res = await Promise.all([getUserProfile(userID), getStatus(userID), getPosts(userID), getIsFollows(userID)]);
            return await Promise.all(res.map(item => dispatch(item)));
        } catch (e) {
            const error = e as Error;
            alert(error.message);
        } finally {
            dispatch(toggleIsFetching(false));
        }
    };
};

export const getUserProfile = (userID: number) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.getProfile(userID);
        dispatch(setUserProfile(response.data));
    };
};

export const getProfileForInitialize = (userID: number) => async () => await profileAPI.getProfile(userID);

export const getStatus = (userID: number) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.getStatus(userID);
        dispatch(setStatus(response.data));
    };
};

export const getIsFollows = (userID: number) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.getIsFollows(userID);
        dispatch(setIsFollows(response.data));
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

export const followUnfollowFlow = (userID: number, isFollow: boolean) => {
    return async (dispatch: Dispatch) => {
        dispatch(setIsFollowingInProgress(true));

        const res = await (isFollow ? usersAPI.unfollow(userID) : usersAPI.follow(userID));

        if (res.data.resultCode === 0) {
            dispatch(setIsFollows(!isFollow));
        } else {
            alert(res.data.messages[0]);
        }

        dispatch(setIsFollowingInProgress(false));
    };
};

export const savePhoto = (photoFile: File) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.savePhoto(photoFile);

        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
            dispatch(setUserPhoto(response.data.data.photos.large));
        }
    };
};

export const saveProfile = (profile: ProfileAPIType) => {
    return async (dispatch: ThunkDispatch<AppStateType, any, AnyAction>, getState: () => AppStateType) => {
        dispatch(toggleIsFetching(true));
        const userId = getState().auth.id;
        const response = await profileAPI.saveProfile(profile);
        dispatch(toggleIsFetching(false));

        if (response.data.resultCode === 0 && userId) {
            return dispatch(getUserProfile(userId));
        } else {
            const contactsErrors: { [key: string]: string } = {};
            response.data.messages.forEach((message: string) => {
                const contact = message.slice(message.indexOf('->') + 2, message.lastIndexOf(')'));
                contactsErrors[contact[0].toLowerCase() + contact.slice(1)] = 'Invalid url format';
            });

            dispatch(stopSubmit('edit-profile', {'contacts': contactsErrors}));
            return Promise.reject(contactsErrors);
        }
    };
};

export const getPosts = (userID: number) => {
    return async (dispatch: Dispatch) => {
        const response = await postsAPI.getPosts(userID);

        if (response) {
            const postsData: PostDataType[] = Object.values(response);

            const updatedPostsData = postsData.map(post => ({
                ...post,
                likes: post.likes ? [...post.likes] : [],
                dislikes: post.dislikes ? [...post.dislikes] : [],
            })).sort((a, b) => b.date.localeCompare(a.date));

            dispatch(setPosts(updatedPostsData));
        } else {
            dispatch(setPosts([]));
        }
    };
};

export const addPost = (userID: number, newPostText: string) => {
    return async (dispatch: Dispatch, getState: () => AppStateType) => {
        const senderUserID = getState().auth.id as number;

        const newPost = {
            id: v1(),
            message: newPostText,
            date: new Date().toJSON(),
            senderUserID,
            likes: [],
            dislikes: [],
        };


        try {
            await postsAPI.addPost(userID, newPost);
            dispatch(addPostToState(newPost));
        } catch (e) {
            const error = e as Error;
            dispatch(stopSubmit('profileAddPostForm', {_error: error.message}));
        }
    };
};

export const putReaction = (userID: number, postID: string, reactions: 'likes' | 'dislikes') => {
    return async (dispatch: Dispatch, getState: () => AppStateType) => {
        const senderUserID = getState().auth.id as number;
        const post = getState().profilePage.postsData.find(post => post.id === postID) as PostDataType;
        const oppositeReactions = reactions === 'likes' ? 'dislikes' : 'likes';

        const updatedPost = post[reactions].includes(senderUserID)
            ? {
                ...post,
                [reactions]: post[reactions].filter(userID => userID !== senderUserID),
                [oppositeReactions]: post[oppositeReactions].filter(userID => userID !== senderUserID),
            }
            : {
                ...post,
                [reactions]: [...post[reactions], senderUserID],
                [oppositeReactions]: post[oppositeReactions].filter(userID => userID !== senderUserID),
            };

        await postsAPI.updatePost(userID, updatedPost);
        const updatedPostsData = getState().profilePage.postsData.map(post => post.id === updatedPost.id ? updatedPost : post);
        dispatch(setPosts(updatedPostsData));
    };
};

export const deletePost = (userID: number, postID: string) => {
    return async (dispatch: Dispatch, getState: () => AppStateType) => {
        await postsAPI.deletePost(userID, postID);
        const updatedPostsData = getState().profilePage.postsData.filter(post => post.id !== postID);
        dispatch(setPosts(updatedPostsData));
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
    userId: number;
    photos: PhotosProfileAPIType;
}
export type PostDataType = {
    id: string;
    message: string;
    date: string;
    senderUserID: number;
    likes: number[];
    dislikes: number[];
}
export type ProfilePageType = {
    postsData: Array<PostDataType>;
    profile: ProfileAPIType | null;
    status: string;
    isFollows: boolean;
    isFollowingInProgress: boolean;
}

export type AddPostToStateActionType = {
    type: 'profile/ADD_POST';
    newPost: PostDataType;
}
export type SetPostsActionType = {
    type: 'profile/SET_POSTS';
    updatedPostsData: PostDataType[];
}
export type SetUserProfileActionType = {
    type: 'profile/SET_USER_PROFILE';
    profile: ProfileAPIType;
}
export type SetStatusActionType = {
    type: 'profile/SET_STATUS';
    status: string;
}
export type SetIsFollowsActionType = {
    type: 'profile/SET_IS_FOLLOWS';
    isFollows: boolean;
}
export type SetIsFollowingInProgressActionType = {
    type: 'profile/SET_IS_FOLLOWING_IN_PROGRESS';
    isFollowingInProgress: boolean;
}
export type SavePhotoSuccessActionType = {
    type: 'profile/SAVE_PHOTO_SUCCESS';
    photos: PhotosProfileAPIType;
}

export type ActionsType =
    AddPostToStateActionType
    | SetPostsActionType
    | SetUserProfileActionType
    | SetStatusActionType
    | SetIsFollowsActionType
    | SetIsFollowingInProgressActionType
    | SavePhotoSuccessActionType;

export default profileReducer;