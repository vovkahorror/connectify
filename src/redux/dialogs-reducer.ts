import {ActionsTypes} from './redux-store';

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
}

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
};

const dialogsReducer = (state = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: action.newMessageBody}],
            };

        default:
            return state;
    }
};

export type SendMessageActionType = {
    type: 'SEND-MESSAGE';
    newMessageBody: string;
}

export const sendMessageAC = (newMessageBody: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
