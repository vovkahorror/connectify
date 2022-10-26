import {ActionsTypes} from "./store";

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

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY';
    body: string;
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE';
}

type DialogsReducerType = (state: DialogsPageType, action: ActionsTypes) => DialogsPageType;

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState: DialogsPageType = {
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
}

const dialogsReducer: DialogsReducerType = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            const body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 5, message: body});
            return state;

        default:
            return state;
    }
};

export const updateNewMessageBodyCreator = (text: string): UpdateNewMessageBodyActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export const sendMessageCreator = (): SendMessageActionType => ({type: SEND_MESSAGE});

export default dialogsReducer;
