import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from './index'

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },

        returnObjects: true
    });

