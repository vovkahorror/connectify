import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, ProfilePageType, UpdateNewPostTextActionType} from "./profile-reducer";
import dialogsReducer, {
    DialogsPageType,
    SendMessageActionType,
    UpdateNewMessageBodyActionType,
} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: {};
}
export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType;
export type StoreType = {
    _state: StateType;
    _callSubscriber: (state: StateType) => void;
    getState: () => StateType;
    subscribe: (observer: (state: StateType) => void) => void;
    dispatch: (action: ActionsTypes) => void;
}


export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

export const store = createStore(rootReducer);