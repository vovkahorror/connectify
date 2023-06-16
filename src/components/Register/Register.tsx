import React, {FC} from 'react';
import {FormDataType, RegisterFormRedux} from './RegisterForm/RegisterForm';
import {connect} from 'react-redux';
import {register} from '../../redux/auth-reducer';
import {useHistory} from 'react-router-dom';
import {message} from 'antd';
import styles from '../Login/Login.module.scss';

const Register: FC<RegisterPropsType> = ({register}) => {
    const [messageApi, contextHolder] = message.useMessage();
    const history = useHistory();
    const onSubmit = (formData: FormDataType) => {
        register(formData.login, formData.email, formData.password, formData.acceptOffer)
            .then(() => messageApi.success(`Thanks for signing up! We have sent an email with a confirmation link to ${formData.email}`))
            .then(() => history.push('/login'))
            .catch(e => alert(e.message));
    };

    return (
        <main className={styles.main}>
            {contextHolder}
            <div className={styles.title}>
                <h1>Create an account</h1>
                <span>Create an account to continue and connect with the people</span>
            </div>
            <div className={styles.register}>
                <RegisterFormRedux onSubmit={onSubmit}/>
            </div>
        </main>
    );
};

type RegisterPropsType = {
    register: (login: string, email: string, password: string, acceptOffer: boolean) => Promise<void>
}

export default connect(null, {register})(Register);