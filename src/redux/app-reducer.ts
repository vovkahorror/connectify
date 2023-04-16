import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    isInitialized: false,
};

const appReducer = (state = initialState, action: any): AppStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true,
            };

        default:
            return state;
    }
};

export type InitializedSuccessActionType = {
    type: 'INITIALIZED_SUCCESS';
};
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: ThunkDispatch<AppStateType, any, AnyAction>) => {
    const promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => dispatch(initializedSuccess()));
};

export type  AppStateType = typeof initialState

export default appReducer;