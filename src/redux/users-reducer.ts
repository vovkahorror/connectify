import {ActionsTypes} from "./redux-store";

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
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState: UsersType = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state = initialState, action: ActionsTypes): UsersType => {
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

        default:
            return state;
    }
};

export type FollowActionType = {
    type: 'FOLLOW';
    userID: number
}
export type UnfollowActionType = {
    type: 'UNFOLLOW';
    userID: number
}
export type SetUsersActionType = {
    type: 'SET_USERS';
    users: UserDataType[];
}
export type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE';
    currentPage: number;
}
export type SetTotalUsersCountActionType = {
    type: 'SET_TOTAL_USERS_COUNT';
    totalCount: number;
}
export type ToggleIsFetchingActionType = {
    type: 'TOGGLE_IS_FETCHING';
    isFetching: boolean;
}

export const follow = (userID: number): FollowActionType => ({type: FOLLOW, userID});

export const unfollow = (userID: number): UnfollowActionType => ({type: UNFOLLOW, userID});

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

export default usersReducer;