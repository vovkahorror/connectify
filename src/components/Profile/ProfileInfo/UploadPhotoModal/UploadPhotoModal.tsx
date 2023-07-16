import {ConfigProvider, theme, Upload} from 'antd';
import ImgCrop from 'antd-img-crop';
import styles from './UploadPhotoModal.module.scss';
import React, {FC} from 'react';
import {ReactComponent as UploadIcon} from '../../../../assets/icons/upload.svg';
import {useTheme} from '../../../../theme/useTheme';
import {useTranslation} from 'react-i18next';

export const UploadPhotoModal: FC<UploadPhotoModalPropsType> = ({onMainPhotoSelected}) => {
    const {t} = useTranslation('profile');
    const myTheme = useTheme().theme;
    const themeClassName = myTheme === 'light' ? styles.light : styles.dark;

    return (
        <ConfigProvider
            theme={{algorithm: myTheme === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm}}>
            <ImgCrop resetText={t('reset')} modalTitle={t('uploadPhoto')} modalCancel={t('cancel')}
                     modalOk={t('upload')} showGrid showReset onModalOk={onMainPhotoSelected}>
                <Upload accept=".jpg, .jpeg, .png" className={styles.uploadWrapper}
                        showUploadList={false}>
                    <div className={`${styles.uploadIconBlock} ${themeClassName}`}>
                        <UploadIcon className={`${styles.icon} ${themeClassName}`}/>
                    </div>
                </Upload>
            </ImgCrop>
        </ConfigProvider>
    );
};

type UploadPhotoModalPropsType = {
    onMainPhotoSelected: (value: any) => void;
}