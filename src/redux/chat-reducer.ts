import {chatApi, ChatMessageAPIType, ChatMessageType, StatusType} from '../api/chat-api';
import {Dispatch} from 'redux';
import {v1} from 'uuid';

const initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType,
};

const chatReducer = (state = initialState, action: ActionsType): ChatStateType => {
    switch (action.type) {
        case 'chat/SET_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, ...action.messages]
                    .map((message) => ({...message, id: v1()}))
                    .filter((message, index, array) => index >= array.length - 100),
            };

        case 'chat/CLEAR_MESSAGES':
            return {...state, messages: []};

        case 'chat/SET_STATUS':
            return {...state, status: action.status};

        default:
            return state;
    }
};

const setMessages = (messages: ChatMessageAPIType[]) => ({type: 'chat/SET_MESSAGES', messages} as const);

export const clearMessages = () => ({type: 'chat/CLEAR_MESSAGES'} as const);

const setStatus = (status: StatusType) => ({type: 'chat/SET_STATUS', status} as const);

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null;
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

export const startMessagesListening = () => async (dispatch: Dispatch) => {
    await chatApi.start();
    await chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch));
    await chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
};

export const stopMessagesListening = () => (dispatch: Dispatch) => {
    chatApi.unsubscribe('messages-received', newMessageHandlerCreator(dispatch));
    chatApi.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch));
    chatApi.stop();
    dispatch(clearMessages());
};

export const sendMessage = (message: string) => () => {
    chatApi.sendMessage(message);
};

type ChatStateType = typeof initialState;

type ActionsType = ReturnType<typeof setMessages> | ReturnType<typeof clearMessages> | ReturnType<typeof setStatus>;

export default chatReducer;