React workshop includes step by step guide to create your very own first react application.

## Setting up your application 

### `bash start.sh` 

The above command helps you to setup your CRA environment to begin with your development.

## Folder Structure

The **geekabyte-workshop** includes the source code of your sample project.

The folder structure looks something like this

```
geekabyte-workshop/
  README.md
  .gitignore
  package.json
  yarn.lock
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    movie-island/
    reducers/
    App.js
    App.css
    App.test.js
    index.css
    index.js
    logo.svg
    registerServiceWorker.js
```
## `src/`

`src` folder includes all the application specific code.

* `movie-island/` folder includes all components of your application.
* `reducers/` includes all actions and reducers required when you want to use **Redux** in your application.
* `index.js`file is your entry point to the application which includes all the configuration like redux store configuration.. etc.
* `App.js` is our final component which encompasses all our other components and rendered to the user.
* `registerServiceWorker.js` includes our service worker configuration.

Other than these we have `.css` & `.svg` files

## `public/`

`public` folder includes assets and your main `index.html` file
 
 It also includes `manifest.json` where you can specify app specifc global properties.
 
 ## Running your application 
 
 Go to `geekabyte-workshop/` folder and run
 
 ### `npm run start`
 
 
 
