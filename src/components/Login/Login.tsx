import React from 'react';
import {FormDataType, LoginFormRedux} from './LoginForm/LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';

type MapStateToPropsType = {
    isAuth: boolean;
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void;
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType;

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, {login})(Login)