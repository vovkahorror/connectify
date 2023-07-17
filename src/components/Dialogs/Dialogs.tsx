import {DialogsPageType} from '../../redux/dialogs-reducer';
import React, {FC, useEffect, useRef, useState} from 'react';
import DialogsList from './DialogsList/DialogsList';
import MessagesList from './MessagesList/MessagesList';
import styles from './Dialogs.module.scss';
import {useHistory} from 'react-router-dom';
import {useTheme} from '../../theme/useTheme';
import {useTranslation} from 'react-i18next';

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
    let noMessages = useRef('');
    const {t} = useTranslation('dialogs');
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;
    const [isTransformed, setIsTransformed] = useState(false);

    useEffect(() => {
        requestDialogs()
            .then(() => noMessages.current = t('noMessages'));
    }, [userID, state.messagesData]);

    useEffect(() => {
        if (state.dialogsData.length && !userID) {
            history.push(`/dialogs/${state.dialogsData[0].id}`);
        }
    }, [userID, state.dialogsData]);

    useEffect(() => {
        const handleBackButton = (event: PopStateEvent) => {
            if (isTransformed) {
                event.preventDefault();
                history.replace(`/dialogs/${userID}`);
                setIsTransformed(false);
            }
        };

        window.addEventListener('popstate', handleBackButton);

        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, [history, userID, isTransformed]);

    return (
        <div className={`${styles.dialogsWrapper} ${themeClassName}`}>
            {state.dialogsData.length
                ? <div className={`${styles.dialogs} ${isTransformed && styles.transformed}`}>
                    <DialogsList state={state} setIsTransformed={setIsTransformed}/>
                    <MessagesList state={state} userID={userID} authUserPhoto={authUserPhoto} authUserID={authUserID}
                                  requestMessages={requestMessages} sendMessage={sendMessage}
                                  deleteMessage={deleteMessage} onPageChanged={onPageChanged}
                                  resetMessagesData={resetMessagesData} getNewMessagesCount={getNewMessagesCount}
                                  reset={reset} isTransformed={isTransformed} setIsTransformed={setIsTransformed}/>
                </div>
                : <span className={styles.noMessages}>{noMessages.current}</span>}
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

