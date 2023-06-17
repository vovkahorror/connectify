import {Dispatch} from 'redux';
import {toggleIsFetching} from './app-reducer';
import {dialogsAPI} from '../api/api';
import {PhotosProfileAPIType} from './profile-reducer';

const SET_DIALOGS = 'dialogs/SET_DIALOGS';
const SET_MESSAGES = 'dialogs/SET_MESSAGES';
const SET_CURRENT_PAGE = 'dialogs/SET_CURRENT_PAGE';
const RESET_MESSAGES_DATA = 'dialogs/RESET_MESSAGES_DATA';
const SET_UNREAD_MESSAGES = 'dialogs/SET_UNREAD_MESSAGES';

const initialState: DialogsPageType = {
    dialogsData: [],
    messagesData: {
        items: [],
        totalCount: 0,
        error: null,
        currentPage: 1,
        pageSize: 20,
    },
    unreadMessages: 0,
};

const dialogsReducer = (state = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case SET_DIALOGS:
            return {...state, dialogsData: action.dialogsData};

        case SET_MESSAGES:
            return {
                ...state,
                messagesData: {...state.messagesData, ...action.messagesData},
            };

        case SET_CURRENT_PAGE:
            return {...state, messagesData: {...state.messagesData, currentPage: action.currentPage}};

        case RESET_MESSAGES_DATA:
            return {
                ...state,
                messagesData: {items: [], pageSize: 20, currentPage: 1, totalCount: 0, error: null},
            };

        case SET_UNREAD_MESSAGES:
            return {...state, unreadMessages: action.unreadMessages};

        default:
            return state;
    }
};

export const setDialogsData = (dialogsData: DialogType[]) => ({
    type: SET_DIALOGS,
    dialogsData,
} as const);

export const setMessagesData = (messagesData: MessagesDataType) => ({
    type: SET_MESSAGES,
    messagesData,
} as const);

export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
} as const);

export const resetMessagesData = () => ({
    type: RESET_MESSAGES_DATA,
} as const);

export const setUnreadMessages = (unreadMessages: number) => ({
    type: SET_UNREAD_MESSAGES,
    unreadMessages,
} as const);

export const requestDialogs = () => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await dialogsAPI.getDialogs();
    dispatch(setDialogsData(data));
    dispatch(toggleIsFetching(false));
};

export const requestMessages = (userID: number, page: number, pageSize: number) => async (dispatch: Dispatch) => {
    const data = await dialogsAPI.getMessages(userID, page, pageSize);
    dispatch(setMessagesData({...data, currentPage: page}));
};

export const sendMessage = (userID: number, newMessageBody: string) => async () => {
    await dialogsAPI.sendMessage(userID, newMessageBody);
};

export const deleteMessage = (messageID: string) => async () => {
    await dialogsAPI.deleteMessage(messageID);
};

export const getNewMessagesCount = () => async (dispatch: Dispatch) => {
    const data = await dialogsAPI.getNewMessagesCount();
    dispatch(setUnreadMessages(data));
};

// types
export type DialogType = {
    hasNewMessages: boolean;
    id: number;
    lastDialogActivityDate: string;
    lastUserActivityDate: string;
    newMessagesCount: number;
    photos: PhotosProfileAPIType;
    userName: string;
}
export type MessageType = {
    id: string;
    body: string;
    translatedBody: string | null;
    addedAt: string;
    senderId: number;
    senderName: string;
    recipientId: number;
    viewed: boolean;
}
export type MessagesDataType = {
    items: MessageType[];
    totalCount: number;
    error: string | null;
    currentPage: number;
    pageSize: number;
}
export type DialogsPageType = {
    dialogsData: DialogType[];
    messagesData: MessagesDataType;
    unreadMessages: number;
}

type ActionsType =
    ReturnType<typeof setDialogsData>
    | ReturnType<typeof setMessagesData>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof resetMessagesData>
    | ReturnType<typeof setUnreadMessages>

export default dialogsReducer;
