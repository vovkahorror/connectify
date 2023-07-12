import styles from './News.module.scss';
import {useTheme} from '../../theme/useTheme';
import {newsAPI} from '../../api/news-api';

const News = () => {
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    const requestNews = () => {
        newsAPI.getNews('uk').then(res => console.log(res));
    };

    return (
        <div className={`${styles.news} ${themeClassName}`}>
            <button onClick={requestNews}>+</button>
        </div>
    );
};

export default News;