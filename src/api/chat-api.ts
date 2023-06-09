let subscribers: { [key: string]: Function[] } = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[],
};

let ws: WebSocket;

const closeHandler = () => {
    setTimeout(createChannel, 3000);
};

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers['messages-received'].forEach((sub) => sub(newMessages));
};

const openHandler = () => {
    notifySubscribersAboutStatus('ready');
};

const errorHandler = () => {
    notifySubscribersAboutStatus('error');
};

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('message', messageHandler);
    ws?.removeEventListener('open', openHandler);
    ws?.removeEventListener('error', errorHandler);
    ws?.close();
};

const notifySubscribersAboutStatus = (status: StatusType) => {
    subscribers['status-changed'].forEach((sub) => sub(status));
};

const createChannel = () => {
    cleanUp();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    notifySubscribersAboutStatus('pending');
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('message', messageHandler);
    ws.addEventListener('open', openHandler);
    ws.addEventListener('error', errorHandler);
};

export const chatApi = {
    start() {
        createChannel();
    },

    stop() {
        subscribers['messages-received'] = [];
        subscribers['status-changed'] = [];
        cleanUp();
    },

    subscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        subscribers[eventName].push(callback);

        return () => {
            subscribers[eventName] = subscribers[eventName].filter((sub) => sub !== callback);
        };
    },

    unsubscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        subscribers[eventName] = subscribers[eventName].filter((sub) => sub !== callback);
    },

    sendMessage(message: string) {
        ws?.send(message);
    },
};

type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;

export type ChatMessageAPIType = {
    userId: number;
    photo: string;
    userName: string;
    message: string;
}

export type ChatMessageType = ChatMessageAPIType & { id: string }

export type StatusType = 'pending' | 'ready' | 'error';

type EventsNamesType = 'messages-received' | 'status-changed';
