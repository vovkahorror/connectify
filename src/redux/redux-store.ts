import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, UpdateNewPostTextActionType} from "./profile-reducer";
import dialogsReducer, {SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type PostsDataType = {
    id: number;
    message: string;
    likes: number;
}
export type ProfilePageType = {
    postsData: Array<PostsDataType>;
    newPostText: string;
}
export type DialogsDataType = {
    id: number;
    name: string;
}
export type MessagesDataType = {
    id: number;
    message: string;
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>;
    messagesData: Array<MessagesDataType>;
    newMessageBody: string;
}
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


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

export const store = createStore(reducers);