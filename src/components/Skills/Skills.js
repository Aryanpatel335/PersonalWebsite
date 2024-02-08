import React from "react";
import "./Skills.css"; // Make sure to reference the updated CSS file

const Skills = () => {
  return (
    <div className="skills">
      <h1 id="skills-title">skills</h1>
      <div className="skills-layout">
        <div className="skills-category">
          <h2>languages</h2>
          <ul className="skills-list">
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>frameworks/libraries</h2>
          <ul className="skills-list">
            <li>Bootstrap</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Redux</li>
            <li>Spring/Spring Boot</li>
            <li>Flask</li>
            <li>Jinja</li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>tools</h2>
          <ul className="skills-list">
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
    </div>
  );
};

export default Skills;
