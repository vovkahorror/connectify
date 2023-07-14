import styles from './News.module.scss';
import {useTheme} from '../../theme/useTheme';
import {useDispatch, useSelector} from 'react-redux';
import {getNews, NewsItemType} from '../../redux/news-reducer';
import {AppStateType} from '../../redux/redux-store';
import {NewsItem} from './NewsItem/NewsItem';
import {v1} from 'uuid';
import {useTranslation} from 'react-i18next';
import React, {useEffect} from 'react';
import {Preloader} from '../common/Preloader/Preloader';

const News = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector<AppStateType, boolean>(state => state.app.isFetching);
    const news = useSelector<AppStateType, NewsItemType[]>(state => state.news);
    const {i18n} = useTranslation();
    const {theme} = useTheme();
    const themeClassName = theme === 'light' ? styles.light : styles.dark;

    const requestNews = () => {
        const lang = i18n.language === 'en-GB' ? 'en' : 'uk';
        dispatch(getNews(lang));
    };

    useEffect(() => {
        requestNews();
    }, []);

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <div className={`${styles.news} ${themeClassName}`}>
                {news.map(item => <NewsItem key={v1()} newsItem={item}/>)}
            </div>
        </>
    );
};

export default News;