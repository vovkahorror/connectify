import styles from './Message.module.scss';
import {FC, useState} from 'react';
import {setTimezoneOffsetDate, toFormatDate, toFormatTime} from '../../../../utils/date-helpers';
import {ReactComponent as EyeIcon} from '../../../../assets/icons/eye.svg';
import {ReactComponent as EyeSlashIcon} from '../../../../assets/icons/eyeSlash.svg';
import {ReactComponent as DeleteIcon} from '../../../../assets/icons/trash.svg';
import {ReactComponent as DeletingIcon} from '../../../../assets/icons/requestGrey.svg';
import {ConfigProvider, Popconfirm, theme} from 'antd';
import {DialogsPageType} from '../../../../redux/dialogs-reducer';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme/useTheme';
import userLight from '../../../../assets/images/userLight.svg';
import userDark from '../../../../assets/images/userDark.svg';

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
    const {t, i18n} = useTranslation('dialogs');
    const myTheme = useTheme().theme;
    const themeClassName = myTheme === 'light' ? styles.light : styles.dark;
    const userNoPhoto = myTheme === 'light' ? userLight : userDark;
    const isMyMessage = senderID === authUserID;
    const photo = (isMyMessage ? authUserPhoto : userPhoto) || userNoPhoto;
    const [isDeleting, setIsDeleting] = useState(false);

    const customizedDate = setTimezoneOffsetDate(addedAt);
    const date = toFormatDate(customizedDate, i18n.language);
    const time = toFormatTime(customizedDate, i18n.language);

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
            <div className={`${styles.messageContent} ${themeClassName}`}>
                <span className={styles.messageText} dangerouslySetInnerHTML={{__html: message}}></span>
                <div className={styles.messageDate}>
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
                {isMyMessage && (viewed
                    ? <EyeIcon className={styles.eyeIcon}/>
                    : <EyeSlashIcon className={styles.eyeIcon}/>)}
                <ConfigProvider theme={{algorithm: myTheme === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm}}>
                    <Popconfirm
                        title={t('deleteMessage')}
                        description={t('sureDeleteThisMessage')}
                        onConfirm={() => onDeleteMessage(messageID)}
                        okText={t('yes')}
                        cancelText={t('no')}
                        disabled={isDeleting}
                    >
                        {isDeleting
                            ? <DeletingIcon className={`${styles.deletingMessage} ${themeClassName}`}/>
                            : <DeleteIcon className={`${styles.deleteMessage} ${themeClassName}`}/>}
                    </Popconfirm>
                </ConfigProvider>
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