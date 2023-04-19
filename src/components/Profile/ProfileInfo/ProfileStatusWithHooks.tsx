import React, {ChangeEvent, useState} from 'react';

type ProfileStatusPropsType = {
    status: string;
    updateStatus: (status: string) => void;
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value);

    return (
        <>
            {!editMode
                ? <div><span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span></div>
                : <div><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                              value={status}/></div>}
        </>
    );
};