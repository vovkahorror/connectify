import {usersAPI} from '../api/api';
import {Dispatch} from 'redux';
import {updateObjectInArray} from '../utils/object-helpers';
import {toggleIsFetching} from './app-reducer';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_IN_PROGRESS';

const initialState: UsersType = {
    users: [],
    pageSize: 18,
    totalUsersCount: 0,
    currentPage: 1,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action: ActionsType): UsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true}),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false}),
            };

        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};

        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowingInProgress
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID),
            };

        default:
            return state;
    }
};

export const followSuccess = (userID: number): FollowSuccessActionType => ({type: FOLLOW, userID});

export const unfollowSuccess = (userID: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userID});

export const setUsers = (users: UserDataType[]): SetUsersActionType => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
});

export const toggleIsFollowingInProgress = (isFollowingInProgress: boolean, userID: number): ToggleIsFollowingInProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFollowingInProgress,
    userID,
});

export const requestUsers = (pageNumber: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));

        const data = await usersAPI.getUsers(pageNumber, pageSize);

        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    };
};

const followUnfollowFlow = async (dispatch: Dispatch, userID: number, apiMethod: (userId: number) => Promise<any>, actionCreator: (userId: number) => FollowSuccessActionType | UnfollowSuccessActionType) => {
    dispatch(toggleIsFollowingInProgress(true, userID));

    const response = await apiMethod(userID);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userID));
    }

    dispatch(toggleIsFollowingInProgress(false, userID));
};
export const follow = (userID: number) => {
    return async (dispatch: Dispatch) => {
        await followUnfollowFlow(dispatch, userID, usersAPI.follow.bind(usersAPI), followSuccess);
    };
};

export const unfollow = (userID: number) => {
    return async (dispatch: Dispatch) => {
        await followUnfollowFlow(dispatch, userID, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    };
};

// types
type UserPhotosType = {
    small: string;
    large: string;
}
export type UserDataType = {
    name: string;
    id: number;
    photos: UserPhotosType;
    followed: boolean;
    status: string;
}
export type UsersType = {
    users: Array<UserDataType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    followingInProgress: Array<number>;
}

export type FollowSuccessActionType = {
    type: 'users/FOLLOW';
    userID: number
}
export type UnfollowSuccessActionType = {
    type: 'users/UNFOLLOW';
    userID: number
}
export type SetUsersActionType = {
    type: 'users/SET_USERS';
    users: UserDataType[];
}
export type SetCurrentPageActionType = {
    type: 'users/SET_CURRENT_PAGE';
    currentPage: number;
}
export type SetTotalUsersCountActionType = {
    type: 'users/SET_TOTAL_USERS_COUNT';
    totalCount: number;
}

export type ToggleIsFollowingInProgressActionType = {
    type: 'users/TOGGLE_IS_FOLLOWING_IN_PROGRESS';
    isFollowingInProgress: boolean;
    userID: number;
}

type ActionsType =
    FollowSuccessActionType
    | UnfollowSuccessActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFollowingInProgressActionType;

export default usersReducer;