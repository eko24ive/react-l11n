import './assets/styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App.jsx';
import * as en_L11N from './translations/en.json'
import * as ru_L11N from './translations/ru.json'
import i18next from 'i18next';

const language = location.search.substr(1).split('=')[location.search.substr(1).split('=').indexOf('lang') + 1] || (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

i18next.init({
  debug: true,
  fallbackLng: 'en',
  lng: language,
  resources: {
    en: en_L11N,
    ru: ru_L11N
  }
});

ReactDOM.render( <
  App / > ,
  document.getElementById('app')
);