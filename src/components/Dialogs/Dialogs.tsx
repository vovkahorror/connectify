import {DialogsPageType} from '../../redux/dialogs-reducer';
import React, {FC, useEffect} from 'react';
import DialogsList from './DialogsList/DialogsList';
import MessagesList from './MessagesList/MessagesList';
import styles from './Dialogs.module.scss';
import {useHistory} from 'react-router-dom';

export const Dialogs: FC<DialogsPropsType> = ({
                                                  userID,
                                                  dialogsPage,
                                                  authUserID,
                                                  authUserPhoto,
                                                  requestDialogs,
                                                  requestMessages,
                                                  sendMessage,
                                                  deleteMessage,
                                                  onPageChanged,
                                                  resetMessagesData,
                                                  getNewMessagesCount,
                                                  reset,
                                              }) => {
    const history = useHistory();
    const state = dialogsPage;

    useEffect(() => {
        requestDialogs();
    }, [userID, state.messagesData]);

    useEffect(() => {
        if (state.dialogsData.length && !userID) {
            history.push(`/dialogs/${state.dialogsData[0].id}`);
        }
    }, [state.dialogsData]);

    return (
        <div className={styles.dialogs}>
            {state.dialogsData.length
                ? <>
                    <DialogsList state={state}/>
                    <MessagesList state={state} userID={userID} authUserPhoto={authUserPhoto} authUserID={authUserID}
                                  requestMessages={requestMessages} sendMessage={sendMessage}
                                  deleteMessage={deleteMessage} onPageChanged={onPageChanged}
                                  resetMessagesData={resetMessagesData} getNewMessagesCount={getNewMessagesCount}
                                  reset={reset}/>
                </>
                : <span className={styles.noMessages}>You have no messages yet</span>}
        </div>
    );
};

type DialogsPropsType = {
    userID: number;
    dialogsPage: DialogsPageType;
    authUserID: number | null;
    authUserPhoto?: string | null;
    requestDialogs: () => Promise<void>;
    requestMessages: (userID: number, page: number, pageSize: number) => Promise<void>;
    sendMessage: (userID: number, newMessageBody: string) => Promise<void>;
    deleteMessage: (messageID: string) => Promise<void>;
    onPageChanged: (pageNumber: number) => void;
    resetMessagesData: () => void;
    getNewMessagesCount: () => void;
    reset: (formName: string) => void;
}

