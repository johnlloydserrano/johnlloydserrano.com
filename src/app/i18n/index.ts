import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultLocale, defaultNS } from './config';
import enCommon from './locales/en/common.json';

const resources = {
  en: {
    [defaultNS]: enCommon,
  },
};

try {
  if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init(
      {
        resources,
        lng: defaultLocale,
        fallbackLng: defaultLocale,
        defaultNS,
        interpolation: {
          escapeValue: false,
        },
      },
      err => {
        if (err) console.error('JLS-19 : i18next initialization failed:', err);
        else console.log('JLS-19 : i18next initialized successfully');
      }
    );
  }
} catch (err) {
  console.error('JLS-19 : i18next init error:', err);
}

export default i18n;
