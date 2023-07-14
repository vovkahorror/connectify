import {Dispatch} from 'redux';
import {toggleIsFetching} from './app-reducer';
import {newsAPI} from '../api/news-api';

const SET_NEWS = 'news/SET_NEWS';

const initialState = [] as NewsItemType[];

const newsReducers = (state = initialState, action: ActionsType): NewsItemType[] => {
    switch (action.type) {
        case SET_NEWS:
            return [...action.news];

        default:
            return state;
    }
};

const setNews = (news: NewsItemType[]) => ({type: SET_NEWS, news} as const);

export const getNews = (lang: string) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));

    const res = await newsAPI.getNews(lang);
    dispatch(setNews(res.articles));

    dispatch(toggleIsFetching(false));
};

type ActionsType = ReturnType<typeof setNews>;

export type NewsItemType = {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
    source: {
        name: string;
        url: string;
    }
}

export default newsReducers;