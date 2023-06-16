import React, {FC} from 'react';
import {FormDataType, LoginFormRedux} from './LoginForm/LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import styles from './Login.module.scss';

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
        <main className={styles.main}>
            <h1>Sign In</h1>
            <div className={styles.login}>
                <LoginFormRedux onSubmit={onSubmit} initialValues={{captcha}}/>
            </div>
        </main>
    );
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        captcha: state.auth.captcha,
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, {login})(Login);