import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Here we import the Navbar.css file to grant access to some additional styleNameNames
//import "../styles/Navbar.css";

function Navbar() {
  const styles = {
    navbar: {
      width: "100%",
      border: "2px solid black",
      position: "fixed",
    },

    maxWidthFlex: {
      maxWidth: "1300px",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "2px solid pink",
    },

    li: {
      /* border: "2px solid green", */
    },

    ul: {
      listStyleType: "none",
      border: "2px solid green",
      margin: "auto",
      display: "flex",
    },

    menuBtn: {
      fontSize: "23px",
      cursor: "pointer",
      display: "none",
    },

    a: {
      display: "inline",
      color: "blue  ",
      fontSize: "18px",
      fontWeight: "500",
      //marginLeft: "25px",
      transition: "color 0.3s ease",
      border: "2px solid red",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.maxWidthFlex}>
        <div style={styles.logo}>
          <a style={styles.a} href="https://github.com/rajnidua">
            Portfo<span>lio.</span>
          </a>
        </div>
        <div>
          <ul style={styles.ul}>
            <li styles={styles.li}>
              <a style={styles.a} href="https://github.com/rajnidua">
                Home
              </a>
            </li>
            <li styles={styles.li}>
              <a style={styles.a} href="https://github.com/rajnidua">
                Services
              </a>
            </li>
            <li>
              <a style={styles.a} href="https://github.com/rajnidua">
                Skills
              </a>
            </li>
            <li styles={styles.li}>
              <a style={styles.a} href="https://github.com/rajnidua">
                Projects
              </a>
            </li>
            <li styles={styles.li}>
              <a style={styles.a} href="https://github.com/rajnidua">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div style={styles.menuBtn}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
