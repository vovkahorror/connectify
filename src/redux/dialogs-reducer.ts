import {Dispatch} from 'redux';
import {toggleIsFetching} from './app-reducer';
import {dialogsAPI} from '../api/api';
import {PhotosProfileAPIType} from './profile-reducer';

const SET_DIALOGS = 'dialogs/SET_DIALOGS';

const initialState: DialogsPageType = {
    dialogsData: [],
    messagesData: [],
};

const dialogsReducer = (state = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case SET_DIALOGS:
            return {...state, dialogsData: action.dialogsData};

        default:
            return state;
    }
};

export const setDialogsData = (dialogsData: DialogsDataType[]) => ({
    type: SET_DIALOGS,
    dialogsData,
} as const);

export const requestDialogs = () => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await dialogsAPI.getDialogs();
    dispatch(setDialogsData(data));
    dispatch(toggleIsFetching(false));
};

export const sendMessage = (userID: number, newMessageBody: string) => async () => {
    await dialogsAPI.sendMessage(userID, newMessageBody);
};

// types
export type DialogsDataType = {
    hasNewMessages: boolean;
    id: number;
    lastDialogActivityDate: string;
    lastUserActivityDate: string;
    newMessagesCount: number;
    photos: PhotosProfileAPIType;
    userName: string;
}
export type MessagesDataType = {
    id: number;
    message: string;
}
export type DialogsPageType = {
    dialogsData: DialogsDataType[];
    messagesData: MessagesDataType[];
}

type ActionsType = ReturnType<typeof setDialogsData>;

export default dialogsReducer;
