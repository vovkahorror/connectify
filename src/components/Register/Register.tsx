import React, {FC} from 'react';
import {FormDataType, RegisterFormRedux} from './RegisterForm/RegisterForm';
import {connect} from 'react-redux';
import {register} from '../../redux/auth-reducer';
import {useHistory} from 'react-router-dom';
import {ConfigProvider, message, theme} from 'antd';
import styles from '../Login/Login.module.scss';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../theme/useTheme';

const Register: FC<RegisterPropsType> = ({register}) => {
    const {t} = useTranslation('auth');
    const myTheme = useTheme().theme;
    const themeClassName = myTheme === 'light' ? styles.light : styles.dark;
    const [messageApi, contextHolder] = message.useMessage();
    const history = useHistory();
    const onSubmit = (formData: FormDataType) => {
        register(formData.login, formData.email, formData.password, formData.acceptOffer)
            .then(() => messageApi.success(`Thanks for signing up! We have sent an email with a confirmation link to ${formData.email}`))
            .then(() => history.push('/login'))
            .catch(e => alert(e.message));
    };

    return (
        <main className={`${styles.main} ${themeClassName}`}>
            <ConfigProvider theme={{algorithm: myTheme === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm}}>
                {contextHolder}
            </ConfigProvider>
            <div className={`${styles.title} ${themeClassName}`}>
                <h1>{t('createAccount')}</h1>
                <span>{t('createAccountToContinue')}</span>
            </div>
            <div className={`${styles.register} ${themeClassName}`}>
                <RegisterFormRedux onSubmit={onSubmit}/>
            </div>
        </main>
    );
};

type RegisterPropsType = {
    register: (login: string, email: string, password: string, acceptOffer: boolean) => Promise<void>
}

export default connect(null, {register})(Register);