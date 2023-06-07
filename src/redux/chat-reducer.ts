import {chatApi, ChatMessageType} from '../api/chat-api';
import {Dispatch} from 'redux';

const initialState = {
    messages: [] as ChatMessageType[],
};

const chatReducer = (state = initialState, action: ActionsType): ChatStateType => {
    switch (action.type) {
        case 'chat/SET_MESSAGES':
            return {...state, messages: [...state.messages, ...action.messages]};

        default:
            return state;
    }
};

const setMessages = (messages: ChatMessageType[]) => ({type: 'chat/SET_MESSAGES', messages} as const);

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch: Dispatch) => (messages: ChatMessageType[]) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(setMessages(messages));
        };
    }

    dispatch(setMessages(messages));
};

export const startMessagesListening = () => (dispatch: Dispatch) => {
    chatApi.start();
    chatApi.subscribe(newMessageHandlerCreator(dispatch));
};

export const stopMessagesListening = () => (dispatch: Dispatch) => {
    chatApi.unsubscribe(newMessageHandlerCreator(dispatch));
    chatApi.stop();
};

export const sendMessage = (message: string) => () => {
    chatApi.sendMessage(message);
};

type ChatStateType = typeof initialState;

type ActionsType = ReturnType<typeof setMessages>;

export default chatReducer;