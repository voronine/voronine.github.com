import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../Locales/en/enTranslation.json';
import ukTranslations from '../Locales/uk/ukTranslations.json';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: enTranslations,
            },
            uk: {
                translation: ukTranslations,
            },
        },
    });

export default i18n;