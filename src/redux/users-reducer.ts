import {usersAPI} from '../api/api';
import {Dispatch} from 'redux';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_IN_PROGRESS';

const initialState: UsersType = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action: ActionsType): UsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user),
            };

        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

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

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});

export const toggleIsFollowingInProgress = (isFollowingInProgress: boolean, userID: number): ToggleIsFollowingInProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFollowingInProgress,
    userID,
});

export const requestUsers = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));

        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    };
};

export const follow = (userID: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userID));
        usersAPI.follow(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userID));
            }
            dispatch(toggleIsFollowingInProgress(false, userID));
        });
    };
};

export const unfollow = (userID: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userID));
        usersAPI.unfollow(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userID));
            }
            dispatch(toggleIsFollowingInProgress(false, userID));
        });
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
    isFetching: boolean;
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
export type ToggleIsFetchingActionType = {
    type: 'users/TOGGLE_IS_FETCHING';
    isFetching: boolean;
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
    | ToggleIsFetchingActionType
    | ToggleIsFollowingInProgressActionType;

export default usersReducer;