import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthStateType, setAuthUserData} from "../../redux/auth-reducer";

type MapStateType = {
    isAuth: boolean;
    login: string | null;
}

type MapDispatchType = {
    setAuthUserData: (id: number, email: string, login: string) => void;
}

type HeaderContainerPropsType = MapStateType & MapDispatchType;

class HeaderContainer extends React.Component<HeaderContainerPropsType, AuthStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);