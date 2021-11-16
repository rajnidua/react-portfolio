// import React from "react";
import EmployeeTrackingSystem1 from "../../images/EmployeeTrackingSystem1.png";
import PlantPersonalAssistant from "../../images/PlantPersonalAssistant.png";
import TheTechBlog from "../../images/TheTechBlog.png";
import weatherDashboard from "../../images/weather_dashboard.jpeg";
import workoutTrackerGraph from "../../images/workoutTrackerGraph.png";
import eCommerceBackEnd from "../../images/ECommerce_Back_End.png";
import theCoachPlus from "../../images/TheCoachPlus_Screenshot.png";

const projectsArray = [
  {
    id: "1",
    image: theCoachPlus,
    title: "TheCoach+",
    description: `TheCoach+ aims to provides a digital platform to all those people who have skills to train others in any kind of sport that exists but don’t have a medium to reach their potential students. 
On the Other Side, it helps students to find the best suited coach.
`,
    githubLink: "https://github.com/rajnidua/the-coach-plus",
    appLink: "https://boiling-garden-36543.herokuapp.com/",
  },
  {
    id: "2",
    image: EmployeeTrackingSystem1,
    title: "Employee Tracking System",
    description: `A command-line application to manage a company's employee
                database. This application uses Node.js, Inquirer, and MySQL2.
                Database Name in db : ets (EMPLOYEE TRACKING SYSTEM).User has
                the option to view, add and delete employees, Roles and
                Departments.User can also check the total utilized budget per
                department.`,
    githubLink: "https://github.com/rajnidua/Employee_Tracker",
    appLink:
      "https://drive.google.com/file/d/14zGVOiTEuxwe6KwTaHE8a6QNt5u8dFr9/view?usp=sharing",
  },
  {
    id: "3",
    image: TheTechBlog,
    title: "The Tech Blog",
    description: `A CMS-style blog site similar to a Wordpress site, where
                developers can publish their blog posts and comment on other
                developers’ posts as well. This app follows the MVC paradigm in
                its architectural structure, using Handlebars.js as the
                templating language, Sequelize as the ORM, and the
                express-session npm package for authentication.`,
    githubLink: "https://github.com/rajnidua/The_Tech_Blog",
    appLink: "https://tech-blog-rajni.herokuapp.com",
  },
  {
    id: "4",
    image: PlantPersonalAssistant,
    title: "Plant Personal Assistant",
    description: ` A full stack web application which looks after your plants by
                letting you add your plant details and getting you the next
                watering schedule date for your plant according to the watering
                schedule that you entered. This was a group project where I worked in a team
                of three. I was responsible to develop the back-end , so I
                developed all the get, put and post routes. And also all the
                fetch functions in Js files.This app is deployed in Heroku.`,
    githubLink: "https://github.com/rajnidua/plant-personal-assistant",
    appLink: "https://project-2-your-plant-house.herokuapp.com",
  },
  {
    id: "5",
    image: weatherDashboard,
    title: "Weather Dashboard",
    description: `Dashboard for getting current and future weather conditions
                according to the user selected city name. User also gets to see
                the temperature in his/her selected units. Weather conditions
                are shown using icon and UV index is displayed by using
                different colors describing the severity of the UV. This project
                uses Openweather Map API and fetch javascript function.`,
    githubLink: "https://github.com/rajnidua/weather-dashboard",
    appLink: "https://rajnidua.github.io/weather-dashboard/",
  },
  {
    id: "6",
    image: workoutTrackerGraph,
    title: "Workout Tracker",
    description: `Use this app to view, create and track daily workouts. You can log multiple exercises in a workout on a given day. You would also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, you would be able to track the distance traveled.`,
    githubLink: "https://github.com/rajnidua/Workout-Tracker",
    appLink: "https://infinite-ravine-72963.herokuapp.com/",
  },
  {
    id: "7",
    image: eCommerceBackEnd,
    title: "ECommerce Back End",
    description: `Building the back end for an e-commerce site by configuring a working Express.js API to use Sequelize to interact with a MySQL database. Please visit the insomnia link from the repo of the app to see how routes are set up for this app.`,
    githubLink: "https://github.com/rajnidua/ORM-ECommerce-Back-End",
    appLink:
      "https://drive.google.com/file/d/1MwNPSAkabt0It81PItKifRJLYxJpzOtc/view?usp=sharing",
  },
];

export default projectsArray;
