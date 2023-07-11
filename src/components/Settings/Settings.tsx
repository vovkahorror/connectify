import styles from './Settings.module.scss';
import {Language} from './Language/Language';
import {useTheme} from '../../theme/useTheme';
import {Theme} from './Theme/Theme';

const Settings = () => {
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    return (
        <main className={`${styles.settings} ${themeClassName}`}>
            <Language/>
            <Theme/>
        </main>
    );
};

export default Settings;