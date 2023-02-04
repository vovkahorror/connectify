import React from 'react';
import {FormDataType, LoginFormRedux} from './LoginForm/LoginForm';

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;