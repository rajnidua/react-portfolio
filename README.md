# Setting up react app in github

```md
In the Github :
create a new repository named `react-portfolio`.

In your local machine :
Open the terminal and create a folder named `portfolio` using `mkdir`.
Go into this newly created folder `portfolio` in terminal and run the command :`npx create-react-app react-portfolio` , this will create a react app inside the portfolio folder.
run the command `git init`to initialize the repository.
Now, go into the react folder that you just created `react-portfolio` in the terminal.

In the Visual Studio Code,
Open the same react project folder `reaact-portfolio`.
Make some change to the README.md (to make your first commit)
go back to the terminal where you left and run the commands :
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/rajnidua{change it to your user name}/react-portfolio.git
git push -u origin main
```

# Installations

```md
npx create-react-app react-portfolio
npm i bootstrap dotenv axios --save
To use CSS-in-JS, install the styles component
npm install styled-components --save

Deploy to github:
npm run deploy

For font awesome icons:
Install:

npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons

npm install --save @fortawesome/react-fontawesome
//for social icons
npm i --save @fortawesome/free-brands-svg-icons
Import:

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
Use:

<FontAwesomeIcon icon={faBars} />

For technology icons:
npm i font-mfizz

For Typing
npm i react-typewriter-effect

For gh pages :
npm i gh-pages

For email:
npm install validator

For color
npm install @material-ui/core

For including CSS animations
npm install react-animate-on-scroll --save

Then include animate.css in the project:
import "animate.css/animate.min.css";

Or by simply including a link to the file hosted by CDNJS:

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
</head>
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run :

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
