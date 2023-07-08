import styles from './Settings.module.scss';
import {Language} from './Language/Language';

const Settings = () => {
    return (
        <main className={styles.settings}>
            <Language/>
        </main>
    );
};

export default Settings;