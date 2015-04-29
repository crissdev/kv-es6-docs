# kv-es6-docs

A simple app created with ES6 and Knockout to browse through Knockout-Validation documentation.


### Application Structure

The main sections of the app: 

- `src` contains code that makes the app (scripts, styles etc.)
- `src/app` contains code that makes parts of the app (pages, components etc.) 
- `app/components` contains Knockout components used throughout the application
- `app/pages` contains custom Knockout components that will be shown as pages
- `app/shared` contains shared code used throughout the application
- `app/styles` contains all the CSS required for the application


```
/src/
|
|__/app/
|  |
|  |__/components/
|  |
|  |__/pages/
|  |
|  |__/shared/
|
|__/styles/
|
|__index.html
```


### Run the app

```sh
git clone https://github.com/crissdev/kv-es6-docs.git
npm install
npm start
```
