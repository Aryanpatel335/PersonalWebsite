import React from "react";
import ap from "../../resources/ap.jpg";
import "./About.css";
export const About = () => {
  return (
    <div id="about">
      <h1>About</h1>
      <p>studying software engineering at McMaster University</p>
      <p>constantly learning</p>
      <img src={ap} alt="pfp" width="400px" height="400px" />
      <div>
        <h1>Work Experience</h1>
        <ul>
          <li>
            <h4 className="title">OpenText - Software Developer Intern</h4>
            <p>Core Case Management Application</p>
            <p>Java, Spring Boot, Postman, PostgreSQL, Git, Jira, Confluence</p>
          </li>
          <li>
            <h4 className="title">Amelia - Software Developer Intern</h4>
            <p>iOS application developer</p>
            <p>ReactNative, Typescript, Redux, Kanban, Git</p>
          </li>
        </ul>
      </div>
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
