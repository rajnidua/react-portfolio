import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Here we import the Navbar.css file to grant access to some additional styleNameNames
import "../styles/Navbar.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      {/* <div className="max-width"> */}
      <div className="logo">
        <a href="https://github.com/rajnidua">
          Ra<span>jni.</span>
        </a>
      </div>

      <ul className="menu">
        <li>
          <a
            href="#hero"
            onClick={() => handlePageChange("Hero")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li>
          <a href="https://github.com/rajnidua">Skills</a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </a>
        </li>
        <li>
          <a href="https://github.com/rajnidua">Contact</a>
        </li>
      </ul>

      <div className="menu-btn">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
}

export default Navbar;
