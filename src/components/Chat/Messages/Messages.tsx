import React, {FC, MutableRefObject, UIEvent, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {ChatMessageType} from '../../../api/chat-api';
import {Message} from './Message/Message';
import styles from './Messages.module.scss';
import {useTheme} from '../../../theme/useTheme';

export const Messages: FC<MessagesPropsType> = ({noMessages}) => {
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;
    const messages = useSelector<AppStateType, ChatMessageType[]>(state => state.chat.messages);
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true);

    const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
        const element = e.currentTarget;
        const bottomOffset = element.scrollHeight - element.scrollTop - element.clientHeight;
        if (bottomOffset < 50) {
            setIsAutoScroll(true);
        } else {
            setIsAutoScroll(false);
        }
    };

    useEffect(() => {
        if (isAutoScroll) {
            setTimeout(() => {
                messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'});
            }, 100);
        }
    }, [isAutoScroll, messages]);

    return (
        <div className={styles.messages} onScroll={scrollHandler}>
            {messages.length
                ? messages.map(m => <Message key={m.id} {...m}/>)
                : <span className={`${styles.noMessages} ${themeClassName}`}>{noMessages.current}</span>}
            <div ref={messagesAnchorRef}></div>
        </div>
    );
};

type MessagesPropsType = {
    noMessages: MutableRefObject<string>;
}