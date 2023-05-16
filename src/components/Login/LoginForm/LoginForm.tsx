import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import controlsStyles from '../../common/FormsControls/FormsControls.module.css';

const LoginForm: FC<InjectedFormProps<FormDataType>> = ({initialValues: {captcha}, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', 'text', [required], Input)}
            {createField('Password', 'password', 'password', [required], Input)}

            <label>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/>
                Remember me
            </label>

            {captcha && <div>
                <img src={captcha} alt={'captcha'}/>
                {createField('Symbols from image', 'captcha', 'text', [required], Input)}
            </div>}

            {error && <div className={controlsStyles.formSummaryError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
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