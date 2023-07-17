import {ComponentType, useEffect} from 'react';
import {getNewMessagesCount} from '../redux/dialogs-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../redux/redux-store';

export const withNewMessagesRequest = (Component: ComponentType) => {
    return (props: any) => {
        const dispatch = useDispatch();
        const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);

        useEffect(() => {
            if (isAuth) {
                dispatch(getNewMessagesCount());
            }
        }, [dispatch, isAuth]);

        return <Component {...props} />;
    };
};