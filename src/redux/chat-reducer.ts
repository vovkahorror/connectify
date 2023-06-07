import {chatApi, ChatMessageType, StatusType} from '../api/chat-api';
import {Dispatch} from 'redux';

const initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType,
};

const chatReducer = (state = initialState, action: ActionsType): ChatStateType => {
    switch (action.type) {
        case 'chat/SET_MESSAGES':
            return {...state, messages: [...state.messages, ...action.messages]};

        case 'chat/SET_STATUS':
            return {...state, status: action.status};

        default:
            return state;
    }
};

const setMessages = (messages: ChatMessageType[]) => ({type: 'chat/SET_MESSAGES', messages} as const);

const setStatus = (status: StatusType) => ({type: 'chat/SET_STATUS', status} as const);

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(setMessages(messages));
        };
    }

    return _newMessageHandler;
};

let _statusChangedHandler: ((status: StatusType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(setStatus(status));
        };
    }

    return _statusChangedHandler;
};

export const startMessagesListening = () => (dispatch: Dispatch) => {
    chatApi.start();
    chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch));
    chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
};

export const stopMessagesListening = () => (dispatch: Dispatch) => {
    chatApi.unsubscribe('messages-received', newMessageHandlerCreator(dispatch));
    chatApi.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch));
    chatApi.stop();
};

export const sendMessage = (message: string) => () => {
    chatApi.sendMessage(message);
};

type ChatStateType = typeof initialState;

type ActionsType = ReturnType<typeof setMessages> | ReturnType<typeof setStatus>;

export default chatReducer;