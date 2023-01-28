import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, {
    AddPostActionType, SetStatusActionType,
    SetUserProfileActionType,
    UpdateNewPostTextActionType,
} from './profile-reducer';
import dialogsReducer, {SendMessageActionType, UpdateNewMessageBodyActionType} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {
    FollowSuccessActionType,
    SetCurrentPageActionType, SetTotalUsersCountActionType,
    SetUsersActionType, ToggleIsFetchingActionType, ToggleIsFollowingInProgressActionType,
    UnfollowSuccessActionType,
} from './users-reducer';
import authReducer, {SetAuthUserDataActionType} from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | SetStatusActionType
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
    form: formReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store