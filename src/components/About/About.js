import React from "react";
import ap from "../../resources/ap.jpeg";
import "./About.css";
export const About = () => {
  return (
    <div id="about">
      <h1>About</h1>
      <p>👋🏽 Hi, my name is Aryan Patel. I like creating solutions with code!</p>
      <p>
        🎓 I am currently pursuing a Bachelor's in Software Engineering.
        (Expected Graduation: April 2025)
      </p>
      <p>
        🏢 Living in Hamilton studying at McMaster University, passionate about
        software development and making meaningful contributions.
      </p>
      <p>
        📚 I am a Software Engineering Co-op student involved both inside and
        outside the classroom! I am well-versed in a variety of programming
        languages and software development frameworks, including Java,
        JavaScript, Python, and React. I have extensive experience developing
        both front-end and back-end applications, as well as managing databases.
      </p>
      <p>
        💻 Co-op experience in the area of software engineering, this involves
        working with a diverse team and a multitude of departments in order to
        contribute to the codebase actively. Looking into fintech to connect my
        passion for software development and the finance industry.
      </p>
      <p>
        🕵🏼 Interested in: Backend Development, Web Development, Dev-Ops
        Engineering, iOS Development, Full Stack Development, and Machine
        Learning!
      </p>
      <p>
        🏋🏻‍♀️ In my free time you can find me at the gym or working on new trading
        strategies for my stock trades.
      </p>
      {/* make this a circle */}
      {/* <img className="profile-picture" src={ap} alt="pfp" width="400px" height="400px" /> */}
      <div id="experience">
        <h1>Work Experience</h1>
        <ul>
          <li>
            <h4 className="title">Univeris - Software Engineer Intern</h4>
            <p>
              Professional Services -- Enterprise Wealth Management System
              (EWMS)
            </p>
            <p>
              Java, JavaScript, Spring Boot, Postman, MS SQL Server, Git, Jira,
              Confluence
            </p>
          </li>
          <li>
            <h4 className="title">OpenText - Software Engineer Intern</h4>
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
