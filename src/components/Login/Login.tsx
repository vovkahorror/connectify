import React, {FC} from 'react';
import {FormDataType, LoginFormRedux} from './LoginForm/LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {NavLink, Redirect} from 'react-router-dom';
import styles from './Login.module.scss';
import Paragraph from 'antd/es/typography/Paragraph';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../theme/useTheme';

type MapStateToPropsType = {
    captcha?: string | null;
    isAuth: boolean;
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha?: string | null) => Promise<void>;
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType;

const Login: FC<LoginPropsType> = ({login, isAuth, captcha}) => {
    const {t} = useTranslation('auth');
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (isAuth) {
        return <Redirect to={'/profile'}/>;
    }

    return (
        <main className={`${styles.main} ${themeClassName}`}>
            <div className={`${styles.title} ${themeClassName}`}>
                <h1>{t('signIn')}</h1>
                <span>{t('welcomeBack')}</span>
            </div>

            <div className={`${styles.login} ${themeClassName}`}>
                <LoginFormRedux onSubmit={onSubmit} initialValues={{captcha}}/>
            </div>

            <div className={`${styles.info} ${themeClassName}`}>
                <span>{t('youCan')}
                    <NavLink to={'/register'}> {t('createPersonalAccount')}</NavLink>,
                    {t('useDemoAccount')}:</span>
                <div>
                    <span className={styles.copiedTextTitle}>Email:</span>
                    <Paragraph className={`${styles.copiedText} ${themeClassName}`}
                               copyable>free@samuraijs.com</Paragraph>
                </div>
                <div>
                    <span className={styles.copiedTextTitle}>{t('password')}:</span>
                    <Paragraph className={`${styles.copiedText} ${themeClassName}`} copyable>free</Paragraph>
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