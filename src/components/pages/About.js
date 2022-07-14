import React from "react";
import "../../styles/About.css";
import profilePic from "../../images/profile_pic.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="topSection">
        <div>
          <img className="img-class" src={profilePic} alt="profile pic"></img>
        </div>
        <div className="intro">
          Hi, My name is Rajni! I am a self-driven, customer-focused and
          results-oriented Full Stack Web Developer with a passion for delivery
          and development of applications taking a mobile-first and customer
          centric approach. Experienced in all stages of software development,
          skilful in a range of web (front-end and back-end) development
          technologies and demonstrated success working in a high-paced
          environment I bring forth expertise in the design, development,
          testing, implementation, and maintenance of web systems.
        </div>
      </div>
      <div className="about-part margin-top margin-bottom">
        I like to work in challenging roles and focus on writing clean and I
        like to work in challenging roles and focus on writing clean and modular
        code which is easily maintainable and scalable. My priority lies in
        taking a mobile first approach.
      </div>
      <div className="about-part margin-top margin-bottom">
        I have built fully functional web applications by integrating third
        party APIs in Javascript, used both object-relational mapping with
        MySQL2(ORM)and object-document-mapping(ODM) with Mongoose.js,
        modularized applications following the Model-View-Controller(MVC)
        paradigm and much more ....
      </div>
      <div className="about-part margin-top margin-bottom">
        These days I am trying to improve my skills in React and GO.
      </div>
    </section>
  );
}
