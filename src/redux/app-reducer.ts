import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {getAuthUserData, setUserName, setUserPhoto} from './auth-reducer';
import {getProfileForInitialize} from './profile-reducer';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
const TOGGLE_IS_FETCHING = 'app/TOGGLE_IS_FETCHING';

const initialState = {
    isInitialized: false,
    isFetching: false,
};

const appReducer = (state = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true,
            };

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch: ThunkDispatch<AppStateType, any, AnyAction>) => {
    const authPromise = await dispatch(getAuthUserData());
    if (authPromise.data.resultCode === 0) {
        const currentUserProfile = await dispatch(getProfileForInitialize(authPromise.data.data.id));
        dispatch(setUserPhoto(currentUserProfile.data.photos.large));
        dispatch(setUserName(currentUserProfile.data.fullName));
    }
    return dispatch(initializedSuccess());
};

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});

// types
export type  AppStateType = typeof initialState;

export type InitializedSuccessActionType = {
    type: 'app/INITIALIZED_SUCCESS';
};

export type ToggleIsFetchingActionType = {
    type: 'app/TOGGLE_IS_FETCHING';
    isFetching: boolean;
}

type ActionsType = InitializedSuccessActionType | ToggleIsFetchingActionType;

export default appReducer;