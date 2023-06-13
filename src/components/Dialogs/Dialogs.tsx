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
                                                  requestMessages,
                                                  sendMessage,
                                              }) => {
    const history = useHistory();
    const state = dialogsPage;

    useEffect(() => {
        if (state.dialogsData.length) {
            history.push(`/dialogs/${state.dialogsData[0].id}`);
        }
    }, []);

    return (
        <div className={styles.dialogs}>
            <DialogsList state={state}/>
            <MessagesList state={state} userID={userID} authUserPhoto={authUserPhoto} authUserID={authUserID}
                          requestMessages={requestMessages}
                          sendMessage={sendMessage}/>
        </div>
    );
};

type DialogsPropsType = {
    userID: number;
    dialogsPage: DialogsPageType;
    authUserID: number | null;
    authUserPhoto?: string | null;
    requestMessages: (userID: number) => Promise<void>;
    sendMessage: (userID: number, newMessageBody: string) => Promise<void>;
}

