import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import enLocale from './en'
import esLocale from './es'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale
  },
  es: {
    ...esLocale,
  }
}

const i18n = new VueI18n({
  // set locale
  locale: Cookies.get('lang') || getLang(),
  // set locale messages
  messages
})

function getLang(){
  var lang = navigator.language || navigator.userLanguage;

  if(lang == "es-ES")
    lang = 'es';
  else if(lang == "en-US" || lang == "en-EN") lang = 'en'
  else lang = 'en'

  if(!Cookies.get("lang")){
    Cookies.set("lang", lang);
  }

  return lang;
}

export default i18n