import React, {FC} from 'react';
import {Field, FormErrors, InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import styles from '../../Login/LoginForm/LoginForm.module.scss';
import controlsStyles from '../../common/FormsControls/FormsControls.module.scss';
import {NavLink} from 'react-router-dom';

const RegisterForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <span className={styles.fieldTitle}>Login</span>
                {createField('Your Login', 'login', 'text', [required], Input, 'new-password')}
            </div>
            <div>
                <span className={styles.fieldTitle}>Email</span>
                {createField('Your Email', 'email', 'text', [required], Input, 'new-password')}
            </div>
            <div>
                <span className={styles.fieldTitle}>Password</span>
                {createField('Create Password', 'password', 'password', [required], Input, 'new-password')}
            </div>
            <div>
                <span className={styles.fieldTitle}>Confirm Password</span>
                {createField('Confirm Password', 'confirmPassword', 'password', [required], Input, 'new-password')}
            </div>

            <label className={styles.acceptOffer}>
                <Field component={Input} name={'acceptOffer'} type={'checkbox'}/>
                <span>I consent to the processing of my personal data</span>
            </label>

            {error && <div className={controlsStyles.formSummaryError}>
                {error}
            </div>}

            <button>Sign Up</button>

            <div className={styles.signInBlock}>
                <span>Already have an account? </span>
                <NavLink to={'/login'}>Sign In</NavLink>
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