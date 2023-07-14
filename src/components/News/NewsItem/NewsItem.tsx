import {NewsItemType} from '../../../redux/news-reducer';
import {FC} from 'react';
import {useTheme} from '../../../theme/useTheme';
import styles from './NewsItem.module.scss';
import {toFormatDate, toFormatTime} from '../../../utils/date-helpers';
import {useTranslation} from 'react-i18next';

export const NewsItem: FC<NewsItemPropsType> = ({newsItem}) => {
    const {t, i18n} = useTranslation('news');
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    const date = toFormatDate(newsItem.publishedAt, i18n.language);
    const time = toFormatTime(newsItem.publishedAt, i18n.language);

    const formattedContentText = newsItem.content.slice(0, newsItem.content.indexOf('['));

    return (
        <div className={`${styles.newsItem} ${themeClassName}`}>
            <div className={styles.image} style={{backgroundImage: `url(${newsItem.image})`}}></div>
            <div className={styles.contextWrapper}>
                <div className={styles.content}>
                    <h2 className={`${styles.title} ${themeClassName}`}>{newsItem.title}</h2>
                    <h3 className={`${styles.description} ${themeClassName}`}>{newsItem.description}</h3>
                    <p className={`${styles.contentText} ${themeClassName}`}>{formattedContentText}</p>
                </div>
                <div className={styles.footer}>
                    <span
                        className={`${styles.date} ${themeClassName}`}>{t('publishedOn')} {date} {t('at')} {time} {t('in')} {' '}
                        <a className={`${styles.date} ${themeClassName}`} href={newsItem.source.url} target={'_blank'}
                           rel="noreferrer">
                        {newsItem.source.name}
                    </a></span>
                    <a className={styles.link} href={newsItem.url} target={'_blank'}
                       rel="noreferrer">{t('readMore')}</a>
                </div>
            </div>
        </div>
    );
};

type NewsItemPropsType = {
    newsItem: NewsItemType
}