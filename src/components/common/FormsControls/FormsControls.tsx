import {WrappedFieldProps} from 'redux-form';
import styles from './FormsControls.module.css';
import {FC, ReactNode} from 'react';

type FormControlType = WrappedFieldProps & {
    children: ReactNode;
}

const FormControl: FC<FormControlType> = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>{children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}

export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props;

    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
};

export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props

    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    );
};