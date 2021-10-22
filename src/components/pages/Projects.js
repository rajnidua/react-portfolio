import React, { useState } from "react";
import "../../styles/Projects.css";
import EmployeeTrackingSystem1 from "../../images/EmployeeTrackingSystem1.png";
import PlantPersonalAssistant from "../../images/PlantPersonalAssistant.png";
import TheTechBlog from "../../images/TheTechBlog.png";
import weatherDashboard from "../../images/weather_dashboard.jpeg";
import { createTheme, ThemeProvider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      paper: "#ece8e8",
      default: "#f7f4f4",
    },
  },
});

function Projects() {
  return (
    <section className="projects">
      <section className="project-card-section">
        <div className="project-pic">
          <img className="project-img" src={EmployeeTrackingSystem1} alt="" />
        </div>
        <div className="project-description">
          <div className="about-project">
            <div className="project-title">
              <h2>Employee Tracking System</h2>
            </div>
            <div className="brief-description">
              <p>
                A command-line application to manage a company's employee
                database. This application uses Node.js, Inquirer, and MySQL2.
                Database Name in db : ets (EMPLOYEE TRACKING SYSTEM).User has
                the option to view, add and delete employees, Roles and
                Departments.User can also check the total utilized budget per
                department.
              </p>
            </div>
          </div>
          <div className="project-links">
            {/*       <div className="repo-link">
              <a
                href="https://github.com/rajnidua/Employee_Tracker"
                className="link-btn btn"
              >
                Github Link
              </a>
            </div> */}
            <div className="repo-link">
              <Button
                href="https://github.com/rajnidua/Employee_Tracker"
                color="primary"
                variant="contained"
              >
                Github Link
              </Button>
            </div>
            <div className="site-link">
              <Button
                href="https://drive.google.com/file/d/14zGVOiTEuxwe6KwTaHE8a6QNt5u8dFr9/view?usp=sharing"
                color="primary"
                variant="contained"
              >
                Demo Video
              </Button>
            </div>

            {/* <div className="site-link">
              <a
                href="https://drive.google.com/file/d/14zGVOiTEuxwe6KwTaHE8a6QNt5u8dFr9/view?usp=sharing"
                className="link-btn btn"
              >
                Demo Video
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <section className="project-card-section">
        <div className="project-pic">
          <img className="project-img" src={TheTechBlog} alt="" />
        </div>
        <div className="project-description">
          <div className="about-project">
            <div className="project-title">
              <h2>The Tech Blog</h2>
            </div>
            <div className="brief-description">
              <p>
                A CMS-style blog site similar to a Wordpress site, where
                developers can publish their blog posts and comment on other
                developers’ posts as well. This app follows the MVC paradigm in
                its architectural structure, using Handlebars.js as the
                templating language, Sequelize as the ORM, and the
                express-session npm package for authentication.
              </p>
            </div>
          </div>
          <div className="project-links">
            <div className="repo-link">
              <a
                href="https://github.com/rajnidua/The_Tech_Blog"
                className="link-btn btn"
              >
                Github Link
              </a>
            </div>
            <div className="site-link">
              <a
                href="https://tech-blog-rajni.herokuapp.com"
                className="link-btn btn"
              >
                Live App
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="project-card-section">
        <div className="project-pic">
          <img className="project-img" src={PlantPersonalAssistant} alt="" />
        </div>
        <div className="project-description">
          <div className="about-project">
            <div className="project-title">
              <h2>Plant Personal Assistant</h2>
            </div>
            <div className="brief-description">
              <p>
                A full stack web application which looks after your plants by
                letting you add your plant details and getting you the next
                watering schedule date for your plant according to the watering
                schedule that you entered.User can signup/login to the
                application. This was a group project where I worked in a team
                of three. I was responsible to develop the back-end , so I
                developed all the get, put and post routes. And also all the
                fetch functions in Js files.This app is deployed in Heroku
              </p>
            </div>
          </div>
          <div className="project-links">
            <div className="repo-link">
              <a
                href="https://github.com/rajnidua/plant-personal-assistant"
                className="link-btn btn"
              >
                Github Link
              </a>
            </div>
            <div className="site-link">
              <a
                href="https://project-2-your-plant-house.herokuapp.com"
                className="link-btn btn"
              >
                Live App
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="project-card-section">
        <div className="project-pic">
          <img className="project-img" src={weatherDashboard} alt="" />
        </div>
        <div className="project-description">
          <div className="about-project">
            <div className="project-title">
              <h2>Weather Dashboard</h2>
            </div>
            <div className="brief-description">
              <p>
                Dashboard for getting current and future weather conditions
                according to the user selected city name. User also gets to see
                the temperature in his/her selected units. Weather conditions
                are shown using icon and UV index is displayed by using
                different colors describing the severity of the UV. This project
                uses Openweather Map API and fetch javascript function.
              </p>
            </div>
          </div>
          <div className="project-links">
            <div className="repo-link">
              <a
                href="https://github.com/rajnidua/weather-dashboard"
                className="link-btn btn"
              >
                Github Link
              </a>
            </div>
            <div className="site-link">
              <a
                href=" https://rajnidua.github.io/weather-dashboard/"
                className="link-btn btn"
              >
                Live App
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Projects;
