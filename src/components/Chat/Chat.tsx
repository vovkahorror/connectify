import React, {ComponentType, FC, useEffect} from 'react';
import {StatusType} from '../../api/chat-api';
import {startMessagesListening, stopMessagesListening} from '../../redux/chat-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Messages} from './Messages/Messages';
import {AddMessageForm} from './AddMessageForm/AddMessageForm';
import styles from './Chat.module.scss';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {withNewMessagesRequest} from '../../hoc/withNewMessagesRequest';

const Chat: FC = () => {
    const status = useSelector<AppStateType, StatusType>(state => state.chat.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening());

        return () => {
            dispatch(stopMessagesListening());
        };
    }, [dispatch]);

    return (
        <main className={styles.chat}>
            {status === 'error' && <div>Some error occurred. Please refresh the page</div>}
            <Messages/>
            <AddMessageForm/>
        </main>
    );
};

export default compose<ComponentType>(withAuthRedirect, withNewMessagesRequest)(Chat);