import {combineReducers, createStore} from "redux";
import profileReducer, {
    AddPostActionType,
    SetUserProfileActionType,
    UpdateNewPostTextActionType,
} from "./profile-reducer";
import dialogsReducer, {SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {
    FollowActionType,
    SetCurrentPageActionType, SetTotalUsersCountActionType,
    SetUsersActionType, ToggleIsFetchingActionType,
    UnfollowActionType,
} from "./users-reducer";
import authReducer, {SetAuthUserDataActionType} from "./auth-reducer";

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | SetUserProfileActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | SetAuthUserDataActionType;

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export const store = createStore(rootReducer);