import styles from './Message.module.scss';
import {FC, useState} from 'react';
import userNoPhoto from '../../../../assets/images/user.svg';
import {setTimezoneOffsetDate, toFormatDate, toFormatTime} from '../../../../utils/date-helpers';
import {ReactComponent as EyeIcon} from '../../../../assets/icons/eye.svg';
import {ReactComponent as EyeSlashIcon} from '../../../../assets/icons/eyeSlash.svg';
import {ReactComponent as DeleteIcon} from '../../../../assets/icons/trash.svg';
import {ReactComponent as DeletingIcon} from '../../../../assets/icons/requestGrey.svg';
import {Popconfirm} from 'antd';
import {DialogsPageType} from '../../../../redux/dialogs-reducer';

export const Message: FC<MessageType> = ({
                                             messageID,
                                             message,
                                             senderID,
                                             addedAt,
                                             viewed,
                                             state,
                                             userID,
                                             userPhoto,
                                             authUserID,
                                             authUserPhoto,
                                             deleteMessage,
                                             requestMessages,
                                         }) => {
    const isMyMessage = senderID === authUserID;
    const photo = (isMyMessage ? authUserPhoto : userPhoto) || userNoPhoto;
    const [isDeleting, setIsDeleting] = useState(false);

    const customizedDate = setTimezoneOffsetDate(addedAt);
    const date = toFormatDate(customizedDate);
    const time = toFormatTime(customizedDate);

    const onDeleteMessage = (messageID: string) => {
        setIsDeleting(true);
        deleteMessage(messageID)
            .then(() => requestMessages(userID, state.messagesData.currentPage, state.messagesData.pageSize))
            .catch(error => alert(error.message))
            .finally(() => setIsDeleting(false));
    };

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
                <Popconfirm
                    title="Delete this message"
                    description="Are you sure to delete this message?"
                    onConfirm={() => onDeleteMessage(messageID)}
                    okText="Yes"
                    cancelText="No"
                    disabled={isDeleting}
                >
                    {isDeleting
                        ? <DeletingIcon className={styles.deletingMessage}/>
                        : <DeleteIcon className={styles.deleteMessage}/>}
                </Popconfirm>
            </div>
        </div>
    );
};

type MessageType = {
    messageID: string;
    message: string;
    senderID: number;
    addedAt: string;
    viewed: boolean;
    state: DialogsPageType;
    userID: number;
    userPhoto?: string | null;
    authUserID: number | null;
    authUserPhoto?: string | null;
    deleteMessage: (messageID: string) => Promise<void>;
    requestMessages: (userID: number, page: number, pageSize: number) => Promise<void>;
}