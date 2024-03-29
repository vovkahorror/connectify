import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React, {FC} from 'react';
import {Textarea} from '../../../common/FormsControls/FormsControls';
import styles from './AddNewPostForm.module.scss';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme/useTheme';
import userLight from '../../../../assets/images/userLight.svg';
import userDark from '../../../../assets/images/userDark.svg';

const AddNewPostForm: FC<InjectedFormProps<FormDataType>> = ({initialValues: {userPhoto}, handleSubmit, form}) => {
    const {t} = useTranslation('profile');
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;
    const userNoPhoto = theme === 'light' ? userLight : userDark;

    return (
        <form onSubmit={handleSubmit} className={`${styles.form} ${themeClassName}`}>
            <div className={styles.messageBlock}>
                <img className={styles.userPhoto} src={userPhoto || userNoPhoto} alt=""/>
                <Field className={`${styles.message} ${themeClassName}`} component={Textarea} name={'newPostText'}
                       placeholder={t('addPostPlaceholder')}/>
            </div>
            <button className={styles.button} disabled={!form.length}>{t('post')}</button>
        </form>
    );
};

export type FormDataType = {
    newPostText: string;
    userPhoto?: string | null;
}

export const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'profileAddPostForm'})(AddNewPostForm);