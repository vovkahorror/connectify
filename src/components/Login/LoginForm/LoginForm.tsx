import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';

export type FormDataType = {
    email: string;
    password: string;
    rememberMe: boolean;
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} validate={[required]} type={'text'} placeholder={'Email'}/>
            </div>
            <div>
                <Field component={Input} name={'password'} validate={[required]} type={'password'} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/>
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