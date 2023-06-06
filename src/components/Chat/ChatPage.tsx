import React, {FC, useEffect, useState} from 'react';
import {v1} from 'uuid';

const ChatPage: FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: FC = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);

    useEffect(() => {
        let ws: WebSocket;
        const closeHandler = () => {
            setTimeout(createChannel, 3000);
        };

        const createChannel = () => {
            ws?.removeEventListener('close', closeHandler);
            ws?.close();

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            ws.addEventListener('close', closeHandler);
            setWsChannel(ws);
        };

        createChannel();

        return () => {
            ws?.removeEventListener('close', closeHandler);
            ws?.close();
        };
    }, []);

    return (
        <div>
            <Messages wsChannel={wsChannel}/>
            <AddMessageForm wsChannel={wsChannel}/>
        </div>
    );
};

const Messages: FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);

    useEffect(() => {
        const messageHandler = (e: MessageEvent) => {
            debugger
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)]);
        };

        wsChannel?.addEventListener('message', messageHandler);

        return () => {
            wsChannel?.removeEventListener('message', messageHandler);
        };
    }, [wsChannel]);

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

type ChatMessageType = {
    userId: number;
    photo: string;
    userName: string;
    message: string;
}

const AddMessageForm: FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
    const [message, setMessage] = useState('');
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');

    const sendMessage = () => {
        if (!message.trim()) {
            return;
        }

        wsChannel?.send(message);
        setMessage('');
    };

    useEffect(() => {
        const openHandler = () => {
            setReadyStatus('ready');
        };

        wsChannel?.addEventListener('open', openHandler);

        return () => {
            wsChannel?.removeEventListener('open', openHandler);
        };
    }, [wsChannel]);

    return (
        <div>
            <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
            <button disabled={wsChannel === null || readyStatus !== 'ready'} onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatPage;