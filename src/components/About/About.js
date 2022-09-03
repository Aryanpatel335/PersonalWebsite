import React from "react";
import ap from "../../resources/ap.jpg";
export const About = () => {
  return (
    <div id="about">
      <h1>About</h1>
      <p>studying software engineering at McMaster University</p>
      <p>constantly learning</p>
      <img src={ap} alt="pfp" width="310px" height="400px" />
      <div className="skills">
        <h1>Skills</h1>
        <h3>Languages</h3>
        <ul className="languages">
          <li>Java</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <h3>Framework/Libraries</h3>
        <ul className="frameworks">
          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>React</li>
          <li>Redux</li>
          <li>Spring/Spring Boot</li>
          <li>Flask</li>
          <li>Jinja</li>
        </ul>
        <h3>Tools</h3>
        <ul className="tools">
          <li>Git</li>
          <li>Heroku</li>
          <li>Netlify</li>
          <li>MySQL</li>
          <li>SQLite</li>
          <li>MongoDB</li>
          <li>VS Code</li>
          <li>IntelliJ IDEA</li>
        </ul>
      </div>
    </div>
  );
};
