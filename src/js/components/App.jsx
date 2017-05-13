import React, { Component } from 'react';
import i18next from 'i18next';

export default class App extends Component {
  render() {
    return (
      <div>


        <h1>{i18next.t('sentence', { what: 'i18n', how: i18next.t('great') })}</h1>
        <hr />
        <h1>0 {i18next.t('object', { count: 0 })}</h1>
        <h1>1 {i18next.t('object', { count: 1 })}</h1>
        <h1>2 {i18next.t('object', { count: 2 })}</h1>
        <h1>3 {i18next.t('object', { count: 3 })}</h1>
        <h1>4 {i18next.t('object', { count: 4 })}</h1>
        <h1>5 {i18next.t('object', { count: 5 })}</h1>
        <h1>11 {i18next.t('object', { count: 11 })}</h1>
        <h1>99 {i18next.t('object', { count: 99 })}</h1>
        <h1>100 {i18next.t('object', { count: 100 })}</h1>
      </div>
    )
  }
}