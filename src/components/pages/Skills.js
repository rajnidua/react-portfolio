import React, { useState } from "react";
import "../../styles/Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rajni_Resume from "../../images/Rajni_Resume.pdf";

import { createTheme, ThemeProvider, Button } from "@material-ui/core";

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

export default function Skills({ skillsArray }) {
  return (
    <ThemeProvider theme={theme}>
      <section>
        <div className="left-section">
          <h2>Please see the the list of skills, I am equipped with :</h2>
        </div>
        <div className="right-section">
          <div className="skill-block left">
            {/*  <a href="mailto:rajni.dua14@gmail.com?subject=REGARDING WORK">
            RESUME
          </a> */}
            <Button
              href={Rajni_Resume}
              color="primary"
              variant="contained"
              download
            >
              DOWNLOAD RESUME
            </Button>
          </div>
          <div className="skill-block right">
            <ul className="list-group">
              {skillsArray.map((skill) => (
                <li className="list-group-skill" key={skill.id}>
                  <FontAwesomeIcon icon={skill.icon} />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
