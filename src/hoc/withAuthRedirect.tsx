import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type MapStateForRedirectType = {
    isAuth: boolean;
}

const  mapStateToPropsForRedirect = (state: AppStateType): MapStateForRedirectType => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStateForRedirectType) {
        const {isAuth, ...restProps} = props;

        if (!isAuth) {
            return <Redirect to={'/login'}/>;
        }

        return <Component {...restProps as T}/>;
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};