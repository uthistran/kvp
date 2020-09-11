import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

const resources ={
    "en-US" : {
        translation : {
            "Royal Falooda" : "Test"
        }
    },
    "es-ES" : {
        translation : {
            "Royal Falooda" : "vanadio"
        }
    },
    "ta-IN" : {
        translation : {
            "Royal Falooda" : "வெனடியம்"
        }   
    }
}

i18n.use(initReactI18next)
.init({
    resources,
    lng : "en-US",
    keySeparator : false,
    interpolation : {
        escapeValue : false
    }
})

export default i18n;