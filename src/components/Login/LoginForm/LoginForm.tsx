import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import controlsStyles from '../../common/FormsControls/FormsControls.module.scss';
import styles from './LoginForm.module.scss';
import {NavLink} from 'react-router-dom';

const LoginForm: FC<InjectedFormProps<FormDataType>> = ({initialValues: {captcha}, handleSubmit, error}) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <span className={styles.fieldTitle}>Email</span>
                {createField('Your Email', 'email', 'text', [required], Input)}
            </div>
            <div>
                <span className={styles.fieldTitle}>Password</span>
                {createField('Inter Password', 'password', 'password', [required], Input)}
            </div>

            <label className={styles.rememberMe}>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/>
                <span>Remember me</span>
            </label>

            {captcha && <div>
                <img src={captcha} alt={'captcha'}/>
                {createField('Symbols from image', 'captcha', 'text', [required], Input)}
            </div>}

            {error && <div className={controlsStyles.formSummaryError}>
                {error}
            </div>}

            <button>Sign In</button>

            <div className={styles.signUpBlock}>
                <span>Don't have an account?</span>
                <NavLink to={'/register'}>Sign Up</NavLink>
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