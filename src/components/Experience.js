import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="bg-black text-gray-400 p-10">
      <h1 className="text-center text-4xl font-bold mb-10">experience</h1>
      {/* className="bg-gradient-to-br from-gray to-black rounded-lg p-6 hover:-translate-y-1 transform transition duration-500 ease-in-out shadow-lg hover:shadow-xl" */}
      <ul className="list-none p-0">
        <li className="experience-item bg-black rounded-lg p-6 hover:-translate-y-1 transform transition duration-500 ease-in-out shadow-lg hover:shadow-xl border-l-8 border-green mb-2.5">
          <h4 className="text-green text-lg mb-1">
            Univeris - Software Engineer Intern
          </h4>
          <p>Professional Services -- Enterprise Wealth Management System</p>
          <p className="techstack text-green-500 font-bold pt-2">
            Java, JavaScript, Spring Boot, Postman, MS SQL Server, Git, Jira,
            Confluence
          </p>
        </li>
        <li className="experience-item bg-black rounded-lg p-6 hover:-translate-y-1 transform transition duration-500 ease-in-out shadow-lg hover:shadow-xl border-l-8 border-green mb-2.5">
          <h4 className="text-green text-lg mb-1">
            OpenText - Software Engineer Intern
          </h4>
          <p>Core Case Management Application</p>
          <p className="techstack text-green-500 font-bold pt-2">
            Java, Spring Boot, Postman, PostgreSQL, Git, Jira, Confluence
          </p>
        </li>
        <li className="experience-item bg-black rounded-lg p-6 hover:-translate-y-1 transform transition duration-500 ease-in-out shadow-lg hover:shadow-xl border-l-8 border-green  mb-2.5">
          <h4 className="text-green text-lg mb-1">
            Amelia - Software Developer Intern
          </h4>
          <p>iOS application developer</p>
          <p className="techstack text-green-500 font-bold pt-2">
            ReactNative, Typescript, Redux, Kanban, Git
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
