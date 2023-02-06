import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type MapStateForRedirectType = {
    isAuth: boolean;
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStateForRedirectType => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<MapStateForRedirectType> {
        render() {
            const {isAuth, ...restProps} = this.props;

            if (!isAuth) {
                return <Redirect to={'/login'}/>;
            }

            return <Component {...restProps as T}/>;
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}