import React, { useState } from "react";
import "../../styles/Projects.css";
import EmployeeTrackingSystem1 from "../../images/EmployeeTrackingSystem1.png";
import PlantPersonalAssistant from "../../images/PlantPersonalAssistant.png";
import TheTechBlog from "../../images/TheTechBlog.png";
import weatherDashboard from "../../images/weather_dashboard.jpeg";

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam dolorem illum iste magnam, esse voluptas!
              </p>
            </div>
          </div>
          <div className="project-links">
            <div className="repo-link">
              <a href="https://github.com/rajnidua" className="link-btn btn">
                Github Link
              </a>
            </div>
            <div className="site-link">
              <a href="https://github.com/rajnidua" className="link-btn btn">
                Demo Video
              </a>
            </div>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam dolorem illum iste magnam, esse voluptas!
              </p>
            </div>
          </div>
          <div className="project-links">
            <div className="repo-link">
              <a href="https://github.com/rajnidua" className="link-btn btn">
                Github Link
              </a>
            </div>
            <div className="site-link">
              <a href="https://github.com/rajnidua" className="link-btn btn">
                Demo Video
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam dolorem illum iste magnam, esse voluptas!
              </p>
            </div>
          </div>
          <div className="project-links">
            <div className="repo-link">
              <a href="https://github.com/rajnidua" className="link-btn btn">
                Github Link
              </a>
            </div>
            <div className="site-link">
              <a href="https://github.com/rajnidua" className="link-btn btn">
                Demo Video
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam dolorem illum iste magnam, esse voluptas!
              </p>
            </div>
          </div>
          <div className="project-links">
            <div className="repo-link">
              <a href="https://github.com/rajnidua" className="link-btn btn">
                Github Link
              </a>
            </div>
            <div className="site-link">
              <a href="https://github.com/rajnidua" className="link-btn btn">
                Demo Video
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Projects;
