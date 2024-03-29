import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {logout} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo: state.auth.photo,
});

type MapStateType = {
    isAuth: boolean;
    login: string | null;
    photo: string | null;
}

type MapDispatchType = {
    logout: () => void;
}

type HeaderContainerPropsType = MapStateType & MapDispatchType;

export default connect(mapStateToProps, {logout})(HeaderContainer);