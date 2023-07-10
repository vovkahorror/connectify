import React, {ChangeEvent, FC, useState} from 'react';
import styles from './SendMessageModal.module.scss';
import TextArea from 'antd/es/input/TextArea';
import {ConfigProvider, Modal, theme} from 'antd';
import {sendAndSetNotification} from '../../../../utils/dialogs-helpers';
import {MessageInstance} from 'antd/es/message/interface';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme/useTheme';
import userLight from '../../../../assets/images/userLight.svg';
import userDark from '../../../../assets/images/userDark.svg';

const SendMessageModal: FC<SendMessageModalPropsType> = ({
                                                             isModalOpen,
                                                             hideModal,
                                                             userID,
                                                             messageApi,
                                                             userPhoto,
                                                             fullName,
                                                             sendMessage,
                                                         }) => {
    const {t} = useTranslation('profile');
    const [messageText, setMessageText] = useState('');
    const myTheme = useTheme().theme;
    const themeClassName = myTheme === 'light' ? styles.light : styles.dark;
    const userNoPhoto = myTheme === 'light' ? userLight : userDark;

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value.slice(0, 1000));
    };

    const handleSendMessage = () => {
        sendAndSetNotification(messageApi, sendMessage, userID, messageText, t);
        hideModal();
        setMessageText('');
    };

    const toFocusTextarea = (textarea: HTMLTextAreaElement) => setTimeout(() => textarea && textarea.focus());

    return (
        <ConfigProvider theme={{algorithm: myTheme === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm}}>
            <Modal title={`${t('writeYourMessageTo')} ${fullName}`}
                   width={600} open={isModalOpen}
                   onOk={handleSendMessage} cancelText={t('cancel')} okText={t('send')} onCancel={hideModal} centered>
                <hr className={styles.divider}/>
                <div className={styles.modalContent}>
                    <img src={userPhoto || userNoPhoto} alt=""/>
                    <div className={styles.messageBlock}>
                        <TextArea ref={toFocusTextarea} value={messageText}
                                  className={`${styles.messageTextarea} ${themeClassName}`}
                                  placeholder={t('writeYourMessageHere')} autoFocus={true}
                                  onChange={handleMessageChange}/>

                        {messageText.length > 900 &&
                            <span className={styles.notice}>
                            {t('youHave')} {1000 - messageText.length} {t('charactersLeft')}
                        </span>}
                    </div>
                </div>
            </Modal>
        </ConfigProvider>
    );
};

type SendMessageModalPropsType = {
    isModalOpen: boolean;
    userID: number;
    messageApi: MessageInstance;
    userPhoto?: string | null;
    fullName: string | null;
    hideModal: () => void;
    sendMessage: (userID: number, message: string) => Promise<void>;
}

export default SendMessageModal;