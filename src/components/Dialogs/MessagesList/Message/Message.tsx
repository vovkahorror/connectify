import styles from './Message.module.scss';
import {FC} from 'react';
import userNoPhoto from '../../../../assets/images/user.svg';
import {setTimezoneOffsetDate, toFormatDate, toFormatTime} from '../../../../utils/date-helpers';
import {ReactComponent as EyeIcon} from '../../../../assets/icons/eye.svg';
import {ReactComponent as EyeSlashIcon} from '../../../../assets/icons/eyeSlash.svg';

export const Message: FC<MessageType> = ({
                                             message,
                                             senderID,
                                             addedAt,
                                             viewed,
                                             userPhoto,
                                             authUserID,
                                             authUserPhoto,
                                         }) => {
    const isMyMessage = senderID === authUserID;
    const photo = (isMyMessage ? authUserPhoto : userPhoto) || userNoPhoto;

    const customizedDate = setTimezoneOffsetDate(addedAt);
    const date = toFormatDate(customizedDate);
    const time = toFormatTime(customizedDate);

    return (
        <div className={isMyMessage ? styles.ownerMessageBlock : styles.messageBlock}>
            <img className={styles.photo} src={photo} alt=""/>
            <div className={styles.messageContent}>
                <span className={styles.messageText}>{message}</span>
                <div className={styles.messageDate}>
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
                {isMyMessage && (viewed
                    ? <EyeIcon className={styles.eyeIcon}/>
                    : <EyeSlashIcon className={styles.eyeIcon}/>)}
            </div>
        </div>
    );
};

type MessageType = {
    message: string;
    senderID: number;
    addedAt: string;
    viewed: boolean;
    userPhoto?: string | null;
    authUserID: number | null;
    authUserPhoto?: string | null;
}