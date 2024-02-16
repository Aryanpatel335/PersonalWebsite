import React from "react";


const Experience = () => {
  return (
    <div id="experience" className="experience">
      <h1>experience</h1>
      <ul>
        <li className="experience-item">
          <h4 className="experience-title">
            Univeris - Software Engineer Intern
          </h4>
          <p>Professional Services -- Enterprise Wealth Management System</p>
          <p className="techstack">
            Java, JavaScript, Spring Boot, Postman, MS SQL Server, Git, Jira,
            Confluence
          </p>
        </li>
        <li className="experience-item">
          <h4 className="experience-title">
            OpenText - Software Engineer Intern
          </h4>
          <p>Core Case Management Application</p>
          <p className="techstack">
            Java, Spring Boot, Postman, PostgreSQL, Git, Jira, Confluence
          </p>
        </li>
        <li className="experience-item">
          <h4 className="experience-title">
            Amelia - Software Developer Intern
          </h4>
          <p>iOS application developer</p>
          <p className="techstack">
            ReactNative, Typescript, Redux, Kanban, Git
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
