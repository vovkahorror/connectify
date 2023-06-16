import React, {FC} from 'react';
import {FormDataType, LoginFormRedux} from './LoginForm/LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {NavLink, Redirect} from 'react-router-dom';
import styles from './Login.module.scss';
import Paragraph from 'antd/es/typography/Paragraph';

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
            <div className={styles.title}>
                <h1>Sign In</h1>
                <span>Welcome back, you’ve been missed!</span>
            </div>

            <div className={styles.login}>
                <LoginFormRedux onSubmit={onSubmit} initialValues={{captcha}}/>
            </div>

            <div className={styles.info}>
                <span>You can <NavLink to={'/register'}>create your personal account</NavLink>, or if you just want to test the possibilities of our social network, use your demo account details to login:</span>
                <div>
                    <span className={styles.copiedTextTitle}>Login:</span>
                    <Paragraph className={styles.copiedText} copyable>free@samuraijs.com</Paragraph>
                </div>
                <div>
                    <span className={styles.copiedTextTitle}>Password:</span>
                    <Paragraph className={styles.copiedText} copyable>free</Paragraph>
                </div>
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