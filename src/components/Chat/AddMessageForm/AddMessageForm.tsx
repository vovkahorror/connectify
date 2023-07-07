import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {StatusType} from '../../../api/chat-api';
import {sendMessage} from '../../../redux/chat-reducer';
import {ReactComponent as SendIcon} from '../../../assets/icons/send.svg';
import styles from './AddMessageForm.module.scss';
import {useTranslation} from 'react-i18next';

export const AddMessageForm: FC = () => {
    const {t} = useTranslation('dialogs');
    const [message, setMessage] = useState('');
    const status = useSelector<AppStateType, StatusType>(state => state.chat.status);
    const dispatch = useDispatch();

    const writeMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value.slice(0, 100));
    };

    const sendMessageHandler = () => {
        if (!message.trim() || message.length > 100) {
            return;
        }

        dispatch(sendMessage(message));
        setMessage('');
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessageHandler();
        }
    };

    return (
        <div className={styles.addMessageForm}>
            <div className={styles.inputWrapper}>
                <input value={message} onKeyDown={onKeyDownHandler} placeholder={t('enterYourMessage')}
                       onChange={writeMessageHandler} autoFocus/>
                <span className={styles.notice}>{t('youHave')} {100 - message.length} {t('charactersLeft')}</span>
            </div>
            <button className={styles.sendButton} disabled={status !== 'ready' || !message.length}
                    onClick={sendMessageHandler}>
                <SendIcon className={styles.sendIcon}/>
            </button>
        </div>
    );
};