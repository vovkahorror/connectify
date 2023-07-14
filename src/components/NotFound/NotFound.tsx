import styles from './NotFound.module.scss';
import {ReactComponent as NotFoundIcon} from '../../assets/images/404.svg';
import {useTheme} from '../../theme/useTheme';
import {useTranslation} from 'react-i18next';

const NotFound = () => {
    const {t} = useTranslation('settings');
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    return (
        <div className={`${styles.notFound} ${themeClassName}`}>
            <h1 className={`${styles.title} ${themeClassName}`}>{t('pageNotFound')}</h1>
            <NotFoundIcon/>
        </div>
    );
};

export default NotFound;