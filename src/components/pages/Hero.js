import React, { useState } from "react";
import "../../styles/Hero.css";
import profilePic from "../../images/profile_pic.jpg";
//import Typing from "./Typing";
import GetInTouch from "./GetInTouch";
import { createTheme, ThemeProvider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TypeWriterEffect from "react-typewriter-effect";

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

/* const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space - between",
    flexWrap: "wrap",
    alignItems: "center",
    margin: "auto",
    color: "yellow",
    padding: "0 100px 150px 100px",
    height: "100vh",
    minHeight: "500px",
  },
})); */

function Hero() {
  /* const classes = useStyles(); */
  const [buttonClick, setButtonClick] = useState(false);

  const showSkills = (e) => {
    e.target.disabled = true;
    return setButtonClick(true);
  };

  const [words, setWords] = useState(["Developer", "Programmer."]);
  return (
    <ThemeProvider theme={theme}>
      <section className="hero">
        <div className="left-section">
          <img className="img-class" src={profilePic} alt="profile pic"></img>
        </div>
        <div className="right-section">
          <div className="name">
            <h1>RAJNI DUA</h1>
          </div>
          <div className="text-under-name" variant="contained" color="primary">
            <span className="diff-font">FRONT</span> END DEVELOPER{" "}
            <span className="diff-font diff-font-color">|</span>
            <span className="diff-font"> BACK</span> END DEVELOPER
          </div>

          {/*   <div className="typing-block">
            <div className="typing">
              <Typing />
            </div>
          </div> */}

          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "#3F3D56",
              fontWeight: 500,
              fontSize: "1.5em",
            }}
            startDelay={1000}
            cursorColor="#3F3D56"
            multiText={[
              "HTML",
              "CSS",
              "BOOTSTRAP",
              "JAVASCRIPT",
              "JQUERY",
              "MYSQL2",
              "MONGODB",
              "EXPRESS JS",
              "NODE JS",
              "API INTEGRATION",
              "REACT",
              "",
            ]}
            multiTextDelay={1000}
            typeSpeed={30}
            hideCursorAfterText={true}
          />

          <Button
            href="mailto:rajni.dua14@gmail.com?subject=REGARDING WORK"
            color="primary"
            variant="contained"
          >
            GET IN TOUCH
          </Button>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default Hero;
