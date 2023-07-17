import React, {FC, useEffect, useRef, useState} from 'react';
import {AddMessageFormRedux, FormDataType} from './AddMessageForm/AddMessageForm';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../../redux/dialogs-reducer';
import {ReactComponent as PreloaderIcon} from '../../../assets/images/preloader.svg';
import styles from './MessagesList.module.scss';
import MessagesListHeader from './MessagesListHeader/MessagesListHeader';
import {useTheme} from '../../../theme/useTheme';

const MessagesList: FC<MessagesListPropsType> = ({
                                                     state,
                                                     userID,
                                                     authUserID,
                                                     authUserPhoto,
                                                     requestMessages,
                                                     sendMessage,
                                                     deleteMessage,
                                                     onPageChanged,
                                                     resetMessagesData,
                                                     getNewMessagesCount,
                                                     reset,
                                                     isTransformed,
                                                     setIsTransformed,
                                                 }) => {
    const userName = state.dialogsData.find(dialog => dialog.id === userID)?.userName;
    const userPhoto = state.dialogsData.find(dialog => dialog.id === userID)?.photos.large;
    const lastUserActivityDate = state.dialogsData.find(dialog => dialog.id === userID)?.lastUserActivityDate;
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const prevUserID = useRef<number | null>(null);
    const prevPropCurrentPage = useRef<number | null>(null);
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    const addNewMessage = (values: FormDataType) => {
        if (values.newMessageBody.trim()) {
            setIsSending(true);
            sendMessage(userID, values.newMessageBody)
                .then(() => requestMessages(userID, 1, state.messagesData.pageSize))
                .then(() => messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'}))
                .catch(error => alert(error.message))
                .finally(() => setIsSending(false));
            reset('dialogAddMessageForm');
        }
    };

    const messagesElements = state.messagesData.items.map(message => {
        return <Message key={message.id} messageID={message.id} message={message.body} senderID={message.senderId}
                        addedAt={message.addedAt}
                        viewed={message.viewed}
                        state={state}
                        userID={userID}
                        userPhoto={userPhoto}
                        authUserID={authUserID}
                        authUserPhoto={authUserPhoto}
                        deleteMessage={deleteMessage}
                        requestMessages={requestMessages}/>;
    });

    useEffect(() => {
        const currentPage = userID === prevUserID.current ? state.messagesData.currentPage : 1;
        let timerID: NodeJS.Timeout;

        if (userID) {
            setIsLoading(true);
            requestMessages(userID, currentPage, state.messagesData.pageSize)
                .then(() => getNewMessagesCount())
                .then(() => {
                    if (document.documentElement.clientWidth > 768 || isTransformed) {
                        timerID = setTimeout(() => messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'}));
                    }
                })
                .catch(error => alert(error.message))
                .finally(() => setIsLoading(false));
        }

        return () => {
            if (userID !== prevUserID.current && currentPage === prevPropCurrentPage.current) {
                resetMessagesData();
            }
            prevUserID.current = userID;
            clearTimeout(timerID);
        };
    }, [userID, state.messagesData.currentPage, state.messagesData.pageSize, isTransformed]);

    return (
        <div className={`${styles.messagesList} ${themeClassName}`}>
            {isLoading
                ? <PreloaderIcon className={`${styles.preloaderIcon} ${themeClassName}`}/>
                : <>
                    <MessagesListHeader userID={userID}
                                        userPhoto={userPhoto}
                                        userName={userName}
                                        lastUserActivityDate={lastUserActivityDate}
                                        currentPage={state.messagesData.currentPage}
                                        totalCount={state.messagesData.totalCount}
                                        pageSize={state.messagesData.pageSize}
                                        onPageChanged={onPageChanged}
                                        setIsTransformed={setIsTransformed}
                    />

                    <div className={styles.messagesListBodyWrapper}>
                        <div className={styles.messagesListBody}>
                            {messagesElements}
                            <div ref={messagesAnchorRef}></div>
                        </div>
                    </div>

                    <AddMessageFormRedux initialValues={{isRequesting: isSending}} onSubmit={addNewMessage}/>
                </>}
        </div>
    );
};

type MessagesListPropsType = {
    state: DialogsPageType;
    userID: number;
    authUserID: number | null;
    authUserPhoto?: string | null;
    requestMessages: (userID: number, page: number, pageSize: number) => Promise<void>;
    sendMessage: (userID: number, message: string) => Promise<void>;
    deleteMessage: (messageID: string) => Promise<void>;
    onPageChanged: (pageNumber: number) => void;
    resetMessagesData: () => void;
    getNewMessagesCount: () => void;
    reset: (formName: string) => void;
    isTransformed: boolean;
    setIsTransformed: (isTransformed: boolean) => void;
}

export default MessagesList;