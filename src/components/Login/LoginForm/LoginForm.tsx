import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type FormDataType = {
    login: string;
    password: string;
    rememberMe: boolean;
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} type={'text'} placeholder={'Login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} type={'password'} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginFormRedux = reduxForm<FormDataType>({
    form: 'login',
})(LoginForm);