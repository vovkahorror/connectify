import React, {FC} from 'react';
import {ContactsProfileAPIType, ProfileAPIType} from '../../../redux/profile-reducer';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import controlsStyles from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm: FC<InjectedFormProps<ProfileAPIType>> = ({initialValues: profile, handleSubmit, error}) => {
    const mappedContacts = Object.keys(profile.contacts as ContactsProfileAPIType).map(key => {
        if (key !== 'vk') {
            return <li key={key}>
                {key}: {createField(key, `contacts.${key}`, 'text', [], Input)}
            </li>;
        } else {
            return null;
        }
    });

    return (
        <form>
            <button onClick={handleSubmit}>Save</button>
            {error && <div className={controlsStyles.formSummaryError}>
                {error}
            </div>}
            <ul>
                <li>Full name: {createField('Full name', 'fullName', 'text', [required], Input)}</li>
                <li>Looking for a job: {createField('', 'lookingForAJob', 'checkbox', [], Input)}</li>
                <li>My professional
                    skills: {createField('My professional skills', 'lookingForAJobDescription', 'text', [required], Textarea)}</li>
                <li>About me: {createField('About me', 'aboutMe', 'text', [required], Textarea)}</li>
                <li>Contacts:
                    <ul>
                        {mappedContacts}
                    </ul>
                </li>
            </ul>
        </form>
    );
};

export const ProfileDataFormRedux = reduxForm<ProfileAPIType>({form: 'edit-profile'})(ProfileDataForm);