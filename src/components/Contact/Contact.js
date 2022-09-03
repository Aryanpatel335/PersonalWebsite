import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSchool,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <p>
        {" "}
        <FontAwesomeIcon icon={faEnvelope} className="icons" />
        aryanp862002@gmail.com
      </p>
      <p>
        {" "}
        <FontAwesomeIcon icon={faSchool} className="icons" />
        patea156@mcmaster.ca
      </p>
      <p>
        {" "}
        <FontAwesomeIcon icon={faPhone} className="icons" />
        519-328-1159
      </p>
      <a
        href="https://github.com/Aryanpatel335"
        target="_blank"
        rel="noreferrer"
        className="github"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/aryanpatel555/"
        target="_blank"
        rel="noreferrer"
        className="github"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};
