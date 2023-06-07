import React, {FC, useEffect, useState} from 'react';
import {v1} from 'uuid';
import {ChatMessageType} from '../../api/chat-api';
import {sendMessage, startMessagesListening, stopMessagesListening} from '../../redux/chat-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

const ChatPage: FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening());

        return () => {
            dispatch(stopMessagesListening());
        };
    }, [dispatch]);

    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    );
};

const Messages: FC = () => {
    const messages = useSelector<AppStateType, ChatMessageType[]>(state => state.chat.messages);

    return (
        <div style={{height: '800px', overflowY: 'scroll'}}>
            {messages.map(m =>
                <Message key={v1()} {...m}/>,
            )}
        </div>
    );
};

const Message: FC<ChatMessageType> = ({userId, photo, userName, message}) => {
    return (
        <div>
            <img src={photo} alt=""/>
            <span>{userName}</span>
            <span>{message}</span>
        </div>
    );
};

const AddMessageForm: FC = () => {
    const [message, setMessage] = useState('');
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');
    const dispatch = useDispatch();

    const sendMessageHandler = () => {
        if (!message.trim()) {
            return;
        }

        dispatch(sendMessage(message));
        setMessage('');
    };

    return (
        <div>
            <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
            <button disabled={false} onClick={sendMessageHandler}>Send</button>
        </div>
    );
};

export default ChatPage;