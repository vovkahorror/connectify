import {Dispatch} from 'redux';
import {toggleIsFetching} from './app-reducer';
import {dialogsAPI} from '../api/api';
import {PhotosProfileAPIType} from './profile-reducer';

const SET_DIALOGS = 'dialogs/SET_DIALOGS';
const SET_MESSAGES = 'dialogs/SET_MESSAGES';
const SET_CURRENT_PAGE = 'dialogs/SET_CURRENT_PAGE';

const initialState: DialogsPageType = {
    dialogsData: [],
    messagesData: {
        items: [],
        totalCount: 0,
        error: null,
        currentPage: 1,
        pageSize: 20,
    },
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
}

type ActionsType =
    ReturnType<typeof setDialogsData>
    | ReturnType<typeof setMessagesData>
    | ReturnType<typeof setCurrentPage>

export default dialogsReducer;
