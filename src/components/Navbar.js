import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";

// Here we import the Navbar.css file to grant access to some additional styleNameNames
import "../styles/Navbar.css";

function Navbar({ currentPage, handlePageChange }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      {/* <div className="logo">
        <a href="https://github.com/rajnidua">R@j|\|;</a>
      </div> */}
      <div className="logo">
        <a
          href="#hero"
          onClick={() => {
            handlePageChange("Hero");

            closeMobileMenu();
          }}
        >
          R@j|\|;
        </a>
      </div>

      {/* <ul className="menu"> */}
      <ul className={click ? "menu active" : "menu"}>
        <li>
          <a
            href="#hero"
            onClick={() => {
              handlePageChange("Hero");

              closeMobileMenu();
            }}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => {
              handlePageChange("About");
              closeMobileMenu();
            }}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            onClick={() => {
              handlePageChange("Skills");
              closeMobileMenu();
            }}
            className={
              currentPage === "Skills" ? "nav-link active" : "nav-link"
            }
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            onClick={() => {
              handlePageChange("Projects");
              closeMobileMenu();
            }}
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contactForm"
            onClick={() => {
              handlePageChange("ContactForm");
              closeMobileMenu();
            }}
            className={
              currentPage === "ContactForm" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>

      {/*  <div className="menu-btn">
        <FontAwesomeIcon icon={faBars} />
      </div> */}

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <FontAwesomeIcon icon={faWindowClose} className="menu-btn" />
        ) : (
          // <MenuIcon className="menu-icon" />
          <FontAwesomeIcon icon={faBars} className="menu-btn" />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
