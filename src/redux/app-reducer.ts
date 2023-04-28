import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

const initialState = {
    isInitialized: false,
};

const appReducer = (state = initialState, action: ActionsType): AppStateType => {
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

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: ThunkDispatch<AppStateType, any, AnyAction>) => {
    const promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => dispatch(initializedSuccess()));
};

// types
export type  AppStateType = typeof initialState;

export type InitializedSuccessActionType = {
    type: 'app/INITIALIZED_SUCCESS';
};

type ActionsType = InitializedSuccessActionType;

export default appReducer;