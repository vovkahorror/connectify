import React, {FC} from 'react';
import {FormDataType, LoginFormRedux} from './LoginForm/LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';

type MapStateToPropsType = {
    captcha?: string | null;
    isAuth: boolean;
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha?: string | null) => Promise<void>;
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType;

const Login: FC<LoginPropsType> = ({login, isAuth, captcha}) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (isAuth) {
        return <Redirect to={'/profile'}/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmit} initialValues={{captcha}}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        captcha: state.auth.captcha,
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, {login})(Login);