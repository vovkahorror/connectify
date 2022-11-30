export {};
/*
import profileReducer, {ProfilePageType} from "./profile-reducer";
import dialogsReducer, {DialogsPageType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {ActionsTypes} from "./redux-store";

export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: {};
}
export type StoreType = {
    _state: StateType;
    _callSubscriber: (state: StateType) => void;
    getState: () => StateType;
    subscribe: (observer: (state: StateType) => void) => void;
    dispatch: (action: ActionsTypes) => void;
}
export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'I\'m glad to see you here', likes: 5},
                {id: 2, message: 'Hello! How are you?', likes: 4},
                {id: 3, message: 'It\'s my firs post', likes: 3},
            ],
            newPostText: 'Hello',
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Nastya'},
                {id: 2, name: 'Vova'},
                {id: 3, name: 'Pavlik'},
                {id: 4, name: 'Natasha'},
                {id: 5, name: 'Sasha'},
                {id: 6, name: 'Nila'},
            ],
            messagesData: [
                {id: 1, message: 'I\'m OK'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hi!'},
                {id: 4, message: 'It is my family'},
            ],
            newMessageBody: '',
        },
        sidebar: {}
    },
    _callSubscriber(state) {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};*/
