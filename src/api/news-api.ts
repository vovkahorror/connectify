import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gnews.io/api/v4/',
    params: {
        apikey: '4761d1fae02b41be9ab941b50803676a',
    },
});

export const newsAPI = {
    getNews(lang: string) {
        return instance.get(`top-headlines?lang=${lang}`);
    },
};