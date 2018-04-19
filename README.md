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
 
 
 ## Deploying your application
 We will use [heroku](https://www.heroku.com/) to deploy our application. 

### Download and install Heroku
 1. Signup and create an account on [heroku](https://www.heroku.com/)
 2. Download and install the [utility cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) as per your OS.
 3. In your terminal run `heroku login` and complete authentication.

###  Deployment Setup
From the heroku [dashboard](https://dashboard.heroku.com) create a new project and set a name. Your project url will be of the form `https://{PROJECT_NAME}.herokuapp.com`.

Set your current repository as a remote repository for heroku.
```bash
heroku git:remote -a {PROJECT_NAME}
```

### Adding Build packs
Since we use Create React App to package our application we have to tell heroku how to build / bundle the application
```bash
heroku buildpacks:set https://github.com/mars/create-react-app-buildpack.git
```
You can read more about build packs[here](https://www.heroku.com/elements/buildpacks).

### Deploy to  heroku cloud

Typically from the root of your folder you would run
```bash
git add .
git commit -m 'message'
heroku push origin master
``` 
to deploy the master branch onto the heroku cloud, but as our folder to deploy is a subfolder
we will use the following command
```bash
git subtree push --prefix geekabyte-workshop heroku master
 ```

You should see your app deployed like [this](https://gb-react.herokuapp.com/)
