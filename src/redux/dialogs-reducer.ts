import {ActionsTypes, DialogsPageType} from "./store";

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

const dialogsReducer: DialogsReducerType = (state, action) => {
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
