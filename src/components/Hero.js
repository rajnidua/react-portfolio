import React, { useState } from "react";
import "../styles/Hero.css";
import profilePic from "../images/profile_pic.jpg";
import Typing from "./Typing";
import GetInTouch from "./GetInTouch";

function Hero() {
  const [buttonClick, setButtonClick] = useState(false);

  const showSkills = (e) => {
    e.target.disabled = true;
    return setButtonClick(true);
  };

  const [words, setWords] = useState(["Developer", "Programmer."]);
  return (
    <section className="hero">
      <div className="left-section">
        <img className="img-class" src={profilePic} alt="profile pic"></img>
      </div>
      <div className="right-section">
        <div className="name">
          <h1>RAJNI DUA</h1>
        </div>
        <div className="text-under-name">
          <span className="diff-font">FRONT</span> END DEVELOPER{" "}
          <span className="diff-font diff-font-color">|</span>
          <span className="diff-font"> BACK</span> END DEVELOPER
        </div>

        <div className="typing-block">
          {/* <div>MY SKILLS:</div> */}
          <div className="typing">
            <Typing />
          </div>
        </div>

        <a
          className="touch"
          href="mailto:rajni.dua14@gmail.com?subject=REGARDING WORK"
        >
          GET IN TOUCH
        </a>
      </div>
    </section>
  );
}

export default Hero;
