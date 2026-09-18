import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import te from '../locales/te.json';
import hi from '../locales/hi.json';
import ta from '../locales/ta.json';
import kn from '../locales/kn.json';
import ml from '../locales/ml.json';

export const languages = [
  { code: 'en', label: 'English' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'മലയാളം' }
];

const savedLanguage = localStorage.getItem('medsimplify-language') || 'en';

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, te: { translation: te }, hi: { translation: hi }, ta: { translation: ta }, kn: { translation: kn }, ml: { translation: ml } },
  lng: savedLanguage,
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

i18n.on('languageChanged', (language) => localStorage.setItem('medsimplify-language', language));
export default i18n;
