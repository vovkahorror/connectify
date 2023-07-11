import styles from './Theme.module.scss';
import Switch from 'react-switch';
import SunIcon from '../../../assets/icons/sun.svg';
import MoonIcon from '../../../assets/icons/moon.svg';
import {useTheme} from '../../../theme/useTheme';
import {useTranslation} from 'react-i18next';

export const Theme = () => {
    const {t} = useTranslation('settings');
    const {theme, toggleTheme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    return (
        <div className={`${styles.theme} ${themeClassName}`}>
            <span className={`${styles.title} ${themeClassName}`}>{t('theme')}</span>
            <Switch
                onChange={toggleTheme}
                checked={theme === 'light'}
                checkedHandleIcon={<Icon icon={SunIcon}/>}
                uncheckedHandleIcon={<Icon icon={MoonIcon}/>}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor={'#377dff'}
                offColor={'#377dff'}
                handleDiameter={40}
                width={60}
                height={20}
                boxShadow="0 0 0 2px #377dff"
            />
        </div>
    );
};

const Icon = ({icon}: { icon: string }) => {
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    return (
        <div className={`${styles.icon} ${themeClassName}`} style={{backgroundImage: `url(${icon})`}}></div>
    );
};