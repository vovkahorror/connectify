import React, {FC} from 'react';
import {ProfileAPIType} from '../../../redux/profile-reducer';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';

const ProfileDataForm: FC<InjectedFormProps<ProfileFormDataType>> = ({initialValues: {profile}, handleSubmit}) => {
    return (
        <form>
            <button onClick={handleSubmit}>Save</button>
            <div>Full name: {createField('Full name', 'fullName', 'text', [required], Input)}</div>
            <div>Looking for a job: {createField('', 'lookingForAJob', 'checkbox', [], Input)}</div>
            <div>My professional
                skills: {createField('My professional skills', 'lookingForAJobDescription', 'text', [], Textarea)}</div>
            <div>About me: {createField('About me', 'aboutMe', 'text', [], Textarea)}</div>
        </form>
    );
};

export const ProfileDataFormRedux = reduxForm<ProfileFormDataType>({form: 'edit-profile'})(ProfileDataForm);

type ProfileFormDataType = {
    profile: ProfileAPIType | null;
}