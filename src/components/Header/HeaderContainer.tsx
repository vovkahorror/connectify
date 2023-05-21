import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {AuthStateType, logout} from '../../redux/auth-reducer';

type MapStateType = {
    isAuth: boolean;
    login: string | null;
    photoLarge?: string | null;
}

type MapDispatchType = {
    logout: () => void;
}

type HeaderContainerPropsType = MapStateType & MapDispatchType;

class HeaderContainer extends React.Component<HeaderContainerPropsType, AuthStateType> {
    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photoLarge: state.profilePage.profile?.photos.large,
});

export default connect(mapStateToProps, {logout})(HeaderContainer);