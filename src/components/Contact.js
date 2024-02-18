import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSchool,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div id="contact" className="bg-black text-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-10">contact</h1>
      <div className="space-y-4">
        <p className="text-lg">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-green-400" />
          aryanp862002@gmail.com
        </p>
        <p className="text-lg">
          <FontAwesomeIcon icon={faSchool} className="mr-2 text-green-400" />
          patea156@mcmaster.ca
        </p>
        <p className="text-lg">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-green-400" />
          519-328-1159
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://github.com/Aryanpatel335"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-green-400"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/aryanpatel555/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-green-400"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
