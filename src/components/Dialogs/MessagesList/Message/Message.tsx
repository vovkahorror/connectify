import styles from './Message.module.scss';
import {FC} from 'react';
import userNoPhoto from '../../../../assets/images/user.svg';

export const Message: FC<MessageType> = ({message, senderID, userID, userPhoto, authUserID, authUserPhoto}) => {
    const isMyMessage = senderID === authUserID;
    const photo = (isMyMessage ? authUserPhoto : userPhoto) || userNoPhoto;

    return (
        <div className={isMyMessage ? styles.ownerMessageBlock : styles.messageBlock}>
            <img className={styles.photo} src={photo} alt=""/>
            <div className={styles.messageContent}>
                <span className={styles.messageText}>{message}</span>
            </div>
        </div>
    );
};

type MessageType = {
    message: string;
    senderID: number;
    userID: number;
    userPhoto?: string | null;
    authUserID: number | null;
    authUserPhoto?: string | null;
}