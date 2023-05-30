import React, {ChangeEvent, FC, KeyboardEvent, useEffect, useState} from 'react';
import {ReactComponent as EditIcon} from '../../../../../assets/icons/edit.svg';
import styles from './ProfileStatus.module.scss';

export const ProfileStatusWithHooks: FC<ProfileStatusPropsType> = ({status, isOwner, updateStatus}) => {
    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState(status);

    useEffect(() => {
        setLocalStatus(status);
    }, [status]);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(localStatus);
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value);
    };

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            deactivateEditMode();
        }
    };

    return (
        <>
            {!editMode
                ? <div className={styles.currentStatus}>
                    <span>{status || <span className={styles.noStatus}>no status</span>}</span>
                    {isOwner && <EditIcon className={styles.icon} onClick={activateEditMode}/>}
                </div>
                : <div>
                    <input className={styles.statusInput} onChange={onStatusChange} onKeyDown={onKeyDownHandler}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={localStatus}/>
                </div>
            }
        </>
    );
};

type ProfileStatusPropsType = {
    status: string;
    isOwner: boolean;
    updateStatus: (status: string) => void;
}