import React from "react";
import "../../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFilePdf,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Rajni_Resume from "../../images/Rajni_Resume.pdf";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="icon-display">
        <a href="https://www.linkedin.com/in/rajnidua/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="icon-display">
        <a href="https://github.com/rajnidua">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="icon-display">
        <a href="mailto:rajni.dua14@gmail.com?subject=REGARDING WORK">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="icon-display">
        <a href={Rajni_Resume} download>
          <FontAwesomeIcon icon={faFilePdf} />
        </a>
      </div>
    </footer>
  );
}
