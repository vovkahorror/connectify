import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en-GB',
        debug: false,
        nonExplicitSupportedLngs: true,

        interpolation: {
            escapeValue: false,
        },

        backend: {
            loadPath: '/connectify/locales/{{lng}}/{{ns}}.json',
        },
    });

i18n.on('languageChanged', (lng) => {
    if (lng !== 'uk-UA' && lng !== 'en-GB') {
        i18n.changeLanguage('en-GB');
    }
});

export default i18n;