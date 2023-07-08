import styles from './Language.module.scss';
import {useTranslation} from 'react-i18next';
import Switch from 'react-switch';
import UnitedKingdomIcon from '../../../assets/icons/unitedKingdom.svg';
import UkraineIcon from '../../../assets/icons/ukraine.svg';

export const Language = () => {
    const {t, i18n} = useTranslation('settings');

    const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'en-GB' ? 'uk-UA' : 'en-GB');

    return (
        <div className={styles.language}>
            <span className={styles.title}>{t('language')}</span>
            <Switch
                onChange={toggleLanguage}
                checked={i18n.language === 'en-GB'}
                checkedHandleIcon={<Flag icon={UnitedKingdomIcon}/>}
                uncheckedHandleIcon={<Flag icon={UkraineIcon}/>}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor={'#377dff'}
                offColor={'#377dff'}
                handleDiameter={40}
                width={60}
                height={20}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            />
        </div>
    );
};

const Flag = ({icon}: { icon: string }) => {
    return (
        <div className={styles.flag} style={{backgroundImage: `url(${icon})`}}></div>
    );
};