import {AnyAction, Dispatch} from 'redux';
import {AppStateType} from './redux-store';
import {authAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';

const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload};

        default:
            return state;
    }
};

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {
        id,
        email,
        login,
        isAuth,
    },
});

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        return authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    };
};

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: ThunkDispatch<AppStateType, any, AnyAction>) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error: message}));
            }
        });
    };
};

export const logout = () => {
    return (dispatch: ThunkDispatch<AppStateType, any, AnyAction>) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    };
};

// types
export type AuthDataType = {
    id: number | null;
    email: string | null;
    login: string | null;
}

export type AuthStateType = AuthDataType & { isAuth: boolean };

export type SetAuthUserDataActionType = {
    type: 'auth/SET_USER_DATA';
    payload: AuthStateType;
};

type ActionsType = SetAuthUserDataActionType;

export default authReducer;