import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Helper from './helper/helper'



Helper.actionCall("translation/globalization.json", fetchAllGlobalizationString, errorHandler);

function errorHandler(error) {
    console.log(error)
}

function fetchAllGlobalizationString(data) {
    data.SupportedLanguage.forEach(element => {
        Helper.actionCall("translation/" + element + ".json", onSuccessGLStrings, errorHandler);
    });
}
var resources = {};
function onSuccessGLStrings(data){
    Object.assign(resources, data);
}

i18n.use(initReactI18next)
    .init({
        resources,
        lng: "en-US",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;