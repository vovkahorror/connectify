import React, {ComponentType, FC, useEffect, useRef} from 'react';
import {StatusType} from '../../api/chat-api';
import {startMessagesListening, stopMessagesListening} from '../../redux/chat-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Messages} from './Messages/Messages';
import {AddMessageForm} from './AddMessageForm/AddMessageForm';
import styles from './Chat.module.scss';
import {AnyAction, compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {withNewMessagesRequest} from '../../hoc/withNewMessagesRequest';
import {ThunkDispatch} from 'redux-thunk';
import {useTheme} from '../../theme/useTheme';
import {useTranslation} from 'react-i18next';

const Chat: FC = () => {
    const {t} = useTranslation('dialogs');
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;
    const status = useSelector<AppStateType, StatusType>(state => state.chat.status);
    const dispatch = useDispatch<ThunkDispatch<AppStateType, any, AnyAction>>();
    let noMessages = useRef('');

    useEffect(() => {
        dispatch(startMessagesListening())
            .then(() => noMessages.current = t('noMessagesInChat'));

        return () => {
            dispatch(stopMessagesListening());
        };
    }, [dispatch, t]);

    return (
        <main className={`${styles.chat} ${themeClassName}`}>
            {status === 'error' && <div>{t('error')}</div>}
            <Messages noMessages={noMessages}/>
            <AddMessageForm/>
        </main>
    );
};

export default compose<ComponentType>(withAuthRedirect, withNewMessagesRequest)(Chat);