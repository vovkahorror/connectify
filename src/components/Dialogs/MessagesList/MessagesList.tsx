import React, {FC, useEffect} from 'react';
import {AddMessageFormRedux, FormDataType} from './AddMessageForm/AddMessageForm';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../../redux/dialogs-reducer';
import {setTimezoneOffsetDate, toFormatDate, toFormatTime} from '../../../utils/date-helpers';
import userNoPhoto from '../../../assets/images/user.svg';
import styles from './MessagesList.module.scss';
import {NavLink} from 'react-router-dom';

const MessagesList: FC<MessagesListPropsType> = ({
                                                     state,
                                                     userID,
                                                     authUserID,
                                                     authUserPhoto,
                                                     requestMessages,
                                                     sendMessage,
                                                 }) => {
    const userName = state.dialogsData.find(dialog => dialog.id === userID)?.userName;
    const userPhoto = state.dialogsData.find(dialog => dialog.id === userID)?.photos.large;
    const lastUserActivityDate = state.dialogsData.find(dialog => dialog.id === userID)?.lastUserActivityDate;

    const customizedDate = lastUserActivityDate && setTimezoneOffsetDate(lastUserActivityDate);
    const date = customizedDate && toFormatDate(customizedDate);
    const time = customizedDate && toFormatTime(customizedDate);

    const messagesElements = state.messagesData.map(message => {
        return <Message key={message.id} message={message.body} senderID={message.senderId} userID={userID}
                        userPhoto={userPhoto}
                        authUserID={authUserID}
                        authUserPhoto={authUserPhoto}/>;
    });

    const addNewMessage = (values: FormDataType) => {
        sendMessage(userID, values.newMessageBody);
    };

    useEffect(() => {
        if (userID) {
            requestMessages(userID);
        }
    }, [userID]);

    return (
        <div className={styles.messagesList}>
            <div className={styles.messagesListHeader}>
                <NavLink className={styles.userName} to={`/profile/${userID}`}>
                    <img className={styles.userPhoto} src={userPhoto || userNoPhoto} alt=""/>
                </NavLink>
                <div className={styles.userInfo}>
                    <NavLink className={styles.userName} to={`/profile/${userID}`}>
                        <h2 className={styles.userName}>{userName}</h2>
                    </NavLink>
                    <span className={styles.userActivity}>Was online on {date} at {time}</span>
                </div>
            </div>

            <div className={styles.messagesListBody}>
                {messagesElements}
            </div>

            <AddMessageFormRedux onSubmit={addNewMessage}/>
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
}

export default MessagesList;