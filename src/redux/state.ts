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
}

export type AddPostActionType = {
    type: 'ADD-POST';
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT';
    newText: string;
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY';
    body: string;
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE';
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

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likes: 0,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGE) {
            const body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({id: 5, message: body});
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const updateNewMessageBodyCreator = (text: string): UpdateNewMessageBodyActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export const sendMessageCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})