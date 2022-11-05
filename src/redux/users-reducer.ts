import {ActionsTypes} from "./redux-store";

type UserLocationType = {
    city: string;
    country: string;
}
export type UserDataType = {
    id: number;
    photoUrl: string;
    followed: boolean;
    fullName: string;
    status: string;
    location: UserLocationType;
}
export type UsersType = {
    users: Array<UserDataType>;
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState: UsersType = {
    users: [],
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
            return {...state, users: [...state.users, ...action.users]};

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

export const followAC = (userID: number): FollowActionType => ({type: FOLLOW, userID});

export const unfollowAC = (userID: number): UnfollowActionType => ({type: UNFOLLOW, userID});

export const setUsersAC = (users: UserDataType[]): SetUsersActionType => ({type: SET_USERS, users});

export default usersReducer;