import React, {FC, useEffect, useState} from 'react';
import {v1} from 'uuid';

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

const ChatPage: FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: FC = () => {
    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    );
};

const Messages: FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);

    useEffect(() => {
        wsChannel.addEventListener('message', (e) => {
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)]);
        });
    }, []);

    return (
        <div style={{height: '400px', overflowY: 'scroll'}}>
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

type ChatMessageType = {
    userId: number;
    photo: string;
    userName: string;
    message: string;
}

const AddMessageForm: FC = () => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (!message.trim()) {
            return;
        }

        wsChannel.send(message);
        setMessage('');
    };

    return (
        <div>
            <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatPage;