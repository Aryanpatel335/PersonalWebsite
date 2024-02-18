import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const projectData = [
    {
      title: "Product Inventory Manager",
      description:
        "Product inventory manager allows user to notify others on what products need to be ordered when inventory is low.",
      technologies: "Java, Spring/Spring Boot, React, Redux, MySQL",
      github: "https://github.com/Aryanpatel335/product-inventory-manager",
      live: null,
    },
    {
      title: "StockMatch",
      description:
        "StockMatch is an app that offers tailored stock recommendations based on user preferences, simplifying the search for ideal investment opportunities.",
      technologies: "React, Node.js, Express, MongoDB",
      github: "https://github.com/Aryanpatel335/StockMatch",
      live: "https://stockmatch.netlify.app/",
    },
    {
      title: "Post Pic Flask App",
      description:
        "This Flask web app allows users to post pictures and comment on other users' pictures.",
      technologies: "Python, Flask, Jinja, SQLite, HTML, Bootstrap",
      github: "https://github.com/Aryanpatel335/Post-Pic-Flask-App",
      live: "https://postpicflask.herokuapp.com/",
    },
    {
      title: "PLANNER",
      description:
        "Full stack application that allows users to login and add contact information and plan appointments.",
      technologies: "JavaScript, CSS, React, Redux, MongoDB, Node.js, Express",
      github: "https://github.com/Aryanpatel335/PLANNER",
      live: "https://plannerapplication.netlify.app/",
    },
    {
      title: "Spotify Playlist Maker",
      description:
        "Allows users to login to their Spotify account and make a new playlist that gets added directly to their account.",
      technologies: "JavaScript, CSS, React",
      github: "https://github.com/Aryanpatel335/spotify-playlist-maker",
      live: "https://spotifyplaylistmaker.netlify.app/",
    },
    {
      title: "Reddit Minimalist",
      description:
        "Minimalistic Reddit mock that lets you surf subreddits that are provided by the Reddit JSON API.",
      technologies: "JavaScript, CSS, React, Redux, Reddit JSON API",
      github: "https://github.com/Aryanpatel335/reddit-minimalist",
      live: "https://reddit-wrangler.netlify.app/",
    },
  ];

  return (
    <div id="projectSection" className="bg-black text-white p-10">
      <h1 className="text-4xl text-center font-bold mb-10">projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-black rounded-lg p-6 hover:-translate-y-1 transform transition duration-500 ease-in-out shadow-lg hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-3 text-green">
              {project.title}
            </h2>
            <p className="mb-4">{project.description}</p>
            <p className="text-red mb-5">{project.technologies}</p>
            <div className="flex justify-center space-x-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-400"
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="text-xl"
                  />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-400"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
