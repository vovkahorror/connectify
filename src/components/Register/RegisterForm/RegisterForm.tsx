import React, {FC} from 'react';
import {Field, FormErrors, InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import styles from '../../Login/LoginForm/LoginForm.module.scss';
import controlsStyles from '../../common/FormsControls/FormsControls.module.scss';
import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const RegisterForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    const {t} = useTranslation('auth');

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <span className={styles.fieldTitle}>Login</span>
                {createField(t('yourLogin'), 'login', 'text', [required], Input, 'new-password')}
            </div>
            <div>
                <span className={styles.fieldTitle}>Email</span>
                {createField(t('yourEmail'), 'email', 'text', [required], Input, 'new-password')}
            </div>
            <div>
                <span className={styles.fieldTitle}>{t('password')}</span>
                {createField(t('createPassword'), 'password', 'password', [required], Input, 'new-password')}
            </div>
            <div>
                <span className={styles.fieldTitle}>{t('confirmPassword')}</span>
                {createField(t('confirmYourPassword'), 'confirmPassword', 'password', [required], Input, 'new-password')}
            </div>

            <label className={styles.acceptOffer}>
                <Field component={Input} name={'acceptOffer'} type={'checkbox'}/>
                <span>{t('consentToProcessing')}</span>
            </label>

            {error && <div className={controlsStyles.formSummaryError}>
                {error}
            </div>}

            <button>{t('signUp')}</button>

            <div className={styles.signInBlock}>
                <span>{t('alreadyHaveAccount')}</span>
                <NavLink to={'/login'}>{t('getSignIn')}</NavLink>
            </div>
        </form>
    );
};

const validate = (values: FormDataType) => {
    const errors: FormErrors<FormDataType> = {};

    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'The passwords don\'t match';
    }

    return errors;
};

export const RegisterFormRedux = reduxForm<FormDataType>({
    form: 'register', validate,
})(RegisterForm);

export type FormDataType = {
    login: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptOffer: boolean;
}