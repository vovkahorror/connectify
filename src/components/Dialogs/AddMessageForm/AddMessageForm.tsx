import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FC} from 'react';
import {Textarea} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../../utils/validators/validators';

export type FormDataType = {
    newMessageBody: string;
}

const maxLength70 = maxLengthCreator(70);

const AddMessageForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'} validate={[required, maxLength70]}
                       placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm);