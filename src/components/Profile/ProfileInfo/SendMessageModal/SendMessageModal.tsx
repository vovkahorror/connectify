import React, {ChangeEvent, FC, useState} from 'react';
import styles from './SendMessageModal.module.scss';
import userNoPhoto from '../../../../assets/images/user.svg';
import TextArea from 'antd/es/input/TextArea';
import {Modal} from 'antd';
import {sendAndSetNotification} from '../../../../utils/dialogs-helpers';
import {MessageInstance} from 'antd/es/message/interface';

const SendMessageModal: FC<SendMessageModalPropsType> = ({
                                                             isModalOpen,
                                                             hideModal,
                                                             userID,
                                                             messageApi,
                                                             userPhoto,
                                                             fullName,
                                                             sendMessage,
                                                         }) => {
    const [messageText, setMessageText] = useState('');

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value.slice(0, 1000));
    };

    const handleSendMessage = () => {
        sendAndSetNotification(messageApi, sendMessage, userID, messageText);
        hideModal();
        setMessageText('');
    };

    const toFocusTextarea = (textarea: HTMLTextAreaElement) => setTimeout(() => textarea && textarea.focus());

    return (
        <Modal title={`Write your message to ${fullName}`} width={600} open={isModalOpen} onOk={handleSendMessage}
               okText={'Send'} onCancel={hideModal} centered>
            <hr className={styles.divider}/>
            <div className={styles.modalContent}>
                <img src={userPhoto || userNoPhoto} alt=""/>
                <div className={styles.messageBlock}>
                    <TextArea ref={toFocusTextarea} value={messageText}
                              placeholder={'Write your message here'} autoFocus={true}
                              onChange={handleMessageChange}/>

                    {messageText.length > 900 &&
                        <span className={styles.notice}>You have {1000 - messageText.length} characters left</span>}
                </div>
            </div>
        </Modal>
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