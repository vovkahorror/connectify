import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import controlsStyles from '../../common/FormsControls/FormsControls.module.scss';
import styles from './LoginForm.module.scss';
import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../theme/useTheme';

const LoginForm: FC<InjectedFormProps<FormDataType>> = ({initialValues: {captcha}, handleSubmit, error}) => {
    const {t} = useTranslation('auth');
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldWrapper}>
                <span className={`${styles.fieldTitle} ${themeClassName}`}>Email</span>
                {createField(t('yourEmail'), 'email', 'text', [required], Input)}
            </div>
            <div className={styles.fieldWrapper}>
                <span className={`${styles.fieldTitle} ${themeClassName}`}>{t('password')}</span>
                {createField(t('interPassword'), 'password', 'password', [required], Input)}
            </div>

            <label className={`${styles.rememberMe} ${themeClassName}`}>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}
                       className={`${styles.checkbox} ${themeClassName}`}/>
                <span>{t('rememberMe')}</span>
            </label>

            {captcha && <div>
                <img src={captcha} alt={'captcha'}/>
                {createField(t('symbolsFromImage'), 'captcha', 'text', [required], Input)}
            </div>}

            {error && <div className={controlsStyles.formSummaryError}>
                {error}
            </div>}

            <button>{t('logIn')}</button>

            <div className={`${styles.signUpBlock} ${themeClassName}`}>
                <span>{t('dontHaveAccount')}</span>
                <NavLink to={'/register'}>{t('register')}</NavLink>
            </div>
        </form>
    );
};

export const LoginFormRedux = reduxForm<FormDataType>({
    form: 'login',
})(LoginForm);

export type FormDataType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha?: string | null;
}