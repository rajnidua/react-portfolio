import React, { useState } from "react";
import "../styles/Hero.css";
import profilePic from "../images/profile_pic.jpg";
import Typing from "./Typing";

function Hero() {
  const [buttonClick, setButtonClick] = useState(false);

  const showSkills = (e) => {
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
        <a href="https://github.com/rajnidua">GET IN TOUCH</a>
        {/* <div className="typing">
          <Typing />    
        </div> */}
        <button type="button" onClick={showSkills}>
          Check out my Skills
        </button>
        {buttonClick ? <Typing /> : ""}
      </div>
    </section>
  );
}

export default Hero;
