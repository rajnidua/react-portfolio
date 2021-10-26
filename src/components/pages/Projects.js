import React, { useState } from "react";
import "../../styles/Projects.css";

import Bounce from "react-reveal/Bounce";

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

function Projects({ projectsArray }) {
  return (
    <section className="projects">
      {projectsArray.map((project) => (
        <Bounce left key={project.id} className="bounceProject">
          <section className="project-card-section">
            <div className="project-pic">
              <img className="project-img" src={project.image} alt="" />
            </div>

            <div className="project-description">
              <div className="about-project">
                <div className="project-title">
                  <h2>{project.title}</h2>
                </div>
                <div className="brief-description">
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="project-links">
                <div className="repo-link">
                  <Button
                    href={project.github}
                    color="primary"
                    variant="contained"
                  >
                    Github Link
                  </Button>
                </div>
                <div className="site-link">
                  <Button
                    href={project.app}
                    color="primary"
                    variant="contained"
                  >
                    Live App
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </Bounce>
      ))}
    </section>
  );
}

export default Projects;
