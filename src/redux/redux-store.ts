import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {
    AddPostActionType,
    SetUserProfileActionType,
    UpdateNewPostTextActionType,
} from "./profile-reducer";
import dialogsReducer, {SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {
    FollowSuccessActionType,
    SetCurrentPageActionType, SetTotalUsersCountActionType,
    SetUsersActionType, ToggleIsFetchingActionType, ToggleIsFollowingInProgressActionType,
    UnfollowSuccessActionType,
} from "./users-reducer";
import authReducer, {SetAuthUserDataActionType} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | SetUserProfileActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | FollowSuccessActionType
    | UnfollowSuccessActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | ToggleIsFollowingInProgressActionType
    | SetAuthUserDataActionType;

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));