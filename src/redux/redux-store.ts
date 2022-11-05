import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, UpdateNewPostTextActionType} from "./profile-reducer";
import dialogsReducer, {SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {FollowActionType, SetUsersActionType, UnfollowActionType} from "./users-reducer";

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType;

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

export const store = createStore(rootReducer);