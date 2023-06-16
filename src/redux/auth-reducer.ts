import {AnyAction, Dispatch} from 'redux';
import {AppStateType} from './redux-store';
import {authAPI, profileAPI, securityAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {stopSubmit} from 'redux-form';
import {registerAPI} from '../api/register-api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';
const SET_USER_PHOTO = 'auth/SET_USER_PHOTO';

const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    photo: null,
    fullName: null,
    isAuth: false,
    captcha: null,
};

const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
        case SET_USER_PHOTO:
            return {...state, ...action.payload};

        default:
            return state;
    }
};

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean, photo: string | null, fullName: string | null): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {
        id,
        email,
        login,
        isAuth,
        photo,
        fullName,
    },
});

export const getCaptchaUrlSuccess = (captcha: string | null) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {
        captcha,
    },
});

export const setUserPhoto = (photo: string | null) => ({
    type: SET_USER_PHOTO,
    payload: {
        photo,
    },
});

export const getAuthUserData = () => {
    return async (dispatch: Dispatch) => {
        const response = await authAPI.me();

        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data;

            const profile = await profileAPI.getProfile(id);
            const photo = profile.data.photos.large;
            const fullName = profile.data.fullName;

            dispatch(setAuthUserData(id, email, login, true, photo, fullName));
        }

        return response;
    };
};

export const login = (email: string, password: string, rememberMe: boolean, captcha?: string | null) => {
    return async (dispatch: ThunkDispatch<AppStateType, any, AnyAction>) => {
        const response = await authAPI.login(email, password, rememberMe, captcha);

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
            dispatch(getCaptchaUrlSuccess(null));
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }
    };
};

export const register = (login: string, email: string, password: string, acceptOffer: boolean) => {
    return async () => {
        await registerAPI.register(login, email, password, acceptOffer);
    };
};

export const getCaptchaUrl = () => {
    return async (dispatch: Dispatch) => {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    };
};

export const logout = () => {
    return async (dispatch: ThunkDispatch<AppStateType, any, AnyAction>) => {
        const response = await authAPI.logout();

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false, null, null));
        }
    };
};

// types
type AuthDataType = {
    id: number | null;
    email: string | null;
    login: string | null;
    photo: string | null;
    fullName?: string | null;
}

export type AuthStateType = AuthDataType & {
    isAuth: boolean;
    captcha?: string | null;
};

type SetAuthUserDataActionType = {
    type: 'auth/SET_USER_DATA';
    payload: AuthStateType;
};

type GetCaptchaUrlSuccessActionType = {
    type: 'auth/GET_CAPTCHA_URL_SUCCESS';
    payload: {
        captcha: string;
    }
}

type SetUserPhotoActionType = {
    type: 'auth/SET_USER_PHOTO';
    payload: {
        photo: string | null;
    }
}

type ActionsType =
    SetAuthUserDataActionType
    | GetCaptchaUrlSuccessActionType
    | SetUserPhotoActionType;

export default authReducer;