## React l11n demo
App showcasing usage of localization techniques in react application.

Boilerplate for this app is is taken from @kevinpy [Iceberg](https://github.com/kevinpy/Iceberg/releases) project !  
Demo is using [i18-next](https://github.com/i18next/i18next) package.

#### Scripts
`npm start` : Launch `webpack-dev-server` with Hot Module Replacement - http://localhost:8080<br />
`npm run build` : Compile **/src** folder and create **/dist** folder<br />

#### Locales
App is performing lookup in url for `lang` parameter (possible values `ru` or `en`), if parameter not found - it tries to get browser information about client preferable language in `navigator` object. If non of theese found - app fallbacks to english language.  

##### Links 
 - http://localhost:8080?lang=en - English locale
 - http://localhost:8080?lang=ru - Russian locale

#### Roadmap
- `react-router` demo
- integrate `react-i18next`