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
      <div className="right-section">
        <img src={profilePic} alt="profile pic"></img>
      </div>
      <div className="left-section">
        <div>
          <h1>RAJNI DUA</h1>
        </div>
        <div>FRONT END DEVELOPER.BACK END DEVELOPER</div>

        <div className="typing">
          <Typing />
        </div>

        <a href="mailto:rajni.dua14@gmail.com?subject=REGARDING WORK">
          GET IN TOUCH
        </a>
      </div>
    </section>
  );
}

export default Hero;
