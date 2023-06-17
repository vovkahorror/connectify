import {ComponentType, useEffect} from 'react';
import {getNewMessagesCount} from '../redux/dialogs-reducer';
import {useDispatch} from 'react-redux';

export const withNewMessagesRequest = (Component: ComponentType) => {
    return (props: any) => {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(getNewMessagesCount());
        }, [dispatch]);

        return <Component {...props} />;
    };
};