import React from "react";

const Skills = () => {
  return (
    <div className="bg-black text-white p-10 text-center">
      <h1 className="text-center text-4xl font-bold mb-10">skills</h1>
      <div className="flex flex-wrap justify-around items-start gap-4">
        <SkillCategory
          title="languages"
          skills={["Java", "JavaScript", "TypeScript", "Python", "HTML", "CSS"]}
        />
        <SkillCategory
          title="frameworks/libraries"
          skills={[
            "Bootstrap",
            "Express.js",
            "Node.js",
            "React",
            "Redux",
            "Spring/Spring Boot",
            "Flask",
            "Jinja",
          ]}
        />
        <SkillCategory
          title="tools"
          skills={[
            "Git",
            "Heroku",
            "Netlify",
            "MySQL",
            "SQLite",
            "MongoDB",
            "VS Code",
            "IntelliJ IDEA",
          ]}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => (
  <div className="min-w-[200px] max-w-sm mx-auto">
    <h2 className="text-red text-lg font-semibold mb-4">{title}</h2>
    <ul className="list-none p-0">
      {skills.map((skill) => (
        <li
          key={skill}
          className="relative pl-8 mb-2 before:content-['▹'] before:absolute before:left-0 before:text-red-500"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;
