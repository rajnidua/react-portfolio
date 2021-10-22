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

export default function Footer() {
  return (
    <footer className="footer">
      <div className="icon-display">
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
      <div className="icon-display">
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <div className="icon-display">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className="icon-display">
        <FontAwesomeIcon icon={faFilePdf} />
      </div>
    </footer>
  );
}
