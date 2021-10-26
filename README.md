# reactPortfolio

This is my portfolio built in React

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
npm install react-reveal

Then include animate.css in the project:
import "animate.css/animate.min.css";

Or by simply including a link to the file hosted by CDNJS:

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
</head>
```

# Deployment

This app is deployed to github pages.
Command used for deploying is :

```md
npm run deploy
```

# Sections

Home

This is the landing page for the app. I have used flexbox to position the elemnets.
For typing the skills , I used react-typewriter-effect package.

About

Tells a breif desccription about who I am and what I ahve worked on and what I am currently learning.

Skills

Has a Download Resume button for downloading my CV and shows the list of skills I am equipped with.

Projects

I have use animations from react-reveal/Bounce in this page. It shows you a few of my projects with an image, title, description and links to the respective github pages and live apps.

Contact

This section shows my contact details and a form that validates email. After submitting the form, alert box says "hello" and all the fields are cleared.(Form submission functionality has not been added yet)

Footer

Gives you links for my linkedIn, github, email and Resume.
