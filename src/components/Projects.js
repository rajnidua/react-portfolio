import React, { useState } from "react";
import "../styles/Projects.css";
import EmployeeTrackingSystem1 from "../images/EmployeeTrackingSystem1.png";
import PlantPersonalAssistant from "../images/PlantPersonalAssistant.png";
import TheTechBlog from "../images/TheTechBlog.png";
import weatherDashboard from "../images/weather_dashboard.jpeg";

function Projects() {
  return (
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              dolorem illum iste magnam, esse voluptas!
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

    /*  <section class="project-cards" id="project-cards">
      <div class="max-width">
        <a href="#">
          <div class="project-row">
            <div class="project-profile-col">
              <a href="#">
                <img src={EmployeeTrackingSystem1} alt="" />
              </a>
              <p>Video</p>
            </div>
            <div class="project-description-col">
              <a href="#">
                <h4>Employee Tracking System</h4>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam dolorem illum iste magnam, esse voluptas!
              </p>
            </div>
            <div class="project-review-col">
              <div class="stars">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star-half"></i>
              </div>
              <a href="#">Github Link</a>
              <a href="#" class="demo-btn btn">
                Demo Video
              </a>
            </div>
          </div>
        </a>

        <a href="#">
          <div class="project-row">
            <div class="project-profile-col">
              <a href="#">
                <img src={TheTechBlog} alt="" />
              </a>
              <p>The Tech Blog</p>
            </div>
            <div class="project-description-col">
              <a href="#">
                <h4>John Smith</h4>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam dolorem illum iste magnam, esse voluptas!
              </p>
            </div>
            <div class="project-review-col">
              <div class="stars">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star-half"></i>
              </div>
              <a href="#">45 Reviews</a>
              <a href="#" class="enroll-btn btn">
                Enroll
              </a>
            </div>
          </div>
        </a>

        <a href="#">
          <div class="project-row">
            <div class="project-profile-col">
              <a href="#">
                <img src={weatherDashboard} alt="" />
              </a>
              <p>Certified</p>
            </div>
            <div class="project-description-col">
              <a href="#">
                <h4>John Smith</h4>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam dolorem illum iste magnam, esse voluptas!
              </p>
            </div>
            <div class="project-review-col">
              <div class="stars">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star-half"></i>
              </div>
              <a href="#">45 Reviews</a>
              <a href="#" class="enroll-btn btn">
                Enroll
              </a>
            </div>
          </div>
        </a>
      </div>
    </section> */
  );
}

export default Projects;
