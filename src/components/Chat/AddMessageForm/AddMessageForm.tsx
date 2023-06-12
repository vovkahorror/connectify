import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {StatusType} from '../../../api/chat-api';
import {sendMessage} from '../../../redux/chat-reducer';
import {ReactComponent as SendIcon} from '../../../assets/icons/send.svg';
import styles from './AddMessageForm.module.scss';

export const AddMessageForm: FC = () => {
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
                <input value={message} onKeyDown={onKeyDownHandler} placeholder={'Write a message'}
                       onChange={writeMessageHandler}/>
                <span className={styles.notice}>You have {100 - message.length} characters left</span>
            </div>
            <button className={styles.sendButton} disabled={status !== 'ready'}
                    onClick={sendMessageHandler}>
                <SendIcon className={styles.sendIcon}/>
            </button>
        </div>
    );
};