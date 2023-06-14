import React, {FC, useEffect, useRef, useState} from 'react';
import {AddMessageFormRedux, FormDataType} from './AddMessageForm/AddMessageForm';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../../redux/dialogs-reducer';
import {ReactComponent as PreloaderIcon} from '../../../assets/images/preloader.svg';
import styles from './MessagesList.module.scss';
import MessagesListHeader from './MessagesListHeader/MessagesListHeader';

const MessagesList: FC<MessagesListPropsType> = ({
                                                     state,
                                                     userID,
                                                     authUserID,
                                                     authUserPhoto,
                                                     requestMessages,
                                                     sendMessage,
                                                     reset,
                                                 }) => {
    const userName = state.dialogsData.find(dialog => dialog.id === userID)?.userName;
    const userPhoto = state.dialogsData.find(dialog => dialog.id === userID)?.photos.large;
    const lastUserActivityDate = state.dialogsData.find(dialog => dialog.id === userID)?.lastUserActivityDate;
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isRequesting, setIsRequesting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const messagesElements = state.messagesData.items.map(message => {
        return <Message key={message.id} message={message.body} senderID={message.senderId} addedAt={message.addedAt}
                        viewed={message.viewed}
                        userPhoto={userPhoto}
                        authUserID={authUserID}
                        authUserPhoto={authUserPhoto}/>;
    });

    const addNewMessage = (values: FormDataType) => {
        if (values.newMessageBody.trim()) {
            setIsRequesting(true);
            sendMessage(userID, values.newMessageBody)
                .then(() => requestMessages(userID))
                .then(() => messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'}))
                .catch(error => alert(error.message))
                .finally(() => setIsRequesting(false));
            reset('dialogAddMessageForm');
        }
    };

    useEffect(() => {
        if (userID) {
            setIsLoading(true);
            requestMessages(userID)
                .then(() => setTimeout(() => messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})))
                .catch(error => alert(error.message))
                .finally(() => setIsLoading(false));
        }
    }, [userID]);

    return (
        <div className={styles.messagesList}>
            {isLoading
                ? <PreloaderIcon className={styles.preloaderIcon}/>
                : <>
                    <MessagesListHeader userID={userID}
                                        userPhoto={userPhoto}
                                        userName={userName}
                                        lastUserActivityDate={lastUserActivityDate}/>

                    <div className={styles.messagesListBody}>
                        {messagesElements}
                        <div ref={messagesAnchorRef}></div>
                    </div>

                    <AddMessageFormRedux initialValues={{isRequesting: isRequesting}} onSubmit={addNewMessage}/>
                </>}
        </div>
    );
};

type MessagesListPropsType = {
    state: DialogsPageType;
    userID: number;
    authUserID: number | null;
    authUserPhoto?: string | null;
    requestMessages: (userID: number) => Promise<void>;
    sendMessage: (userID: number, message: string) => Promise<void>;
    reset: (formName: string) => void;
}

export default MessagesList;