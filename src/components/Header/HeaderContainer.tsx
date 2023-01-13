import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthStateType, getAuthUserData} from "../../redux/auth-reducer";

type MapStateType = {
    isAuth: boolean;
    login: string | null;
}

type MapDispatchType = {
    getAuthUserData: () => void;
}

type HeaderContainerPropsType = MapStateType & MapDispatchType;

class HeaderContainer extends React.Component<HeaderContainerPropsType, AuthStateType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);