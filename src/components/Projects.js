import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div id="projectSection">
      <h1>projects</h1>

      <div className="projects">
        <div className="projectTile">
          <p className="projectTitle">Product Inventory Manager</p>
          <p className="projectDescription">
            Product inventory manager allows user to notify others on what
            products need to be ordered when inventory is low
          </p>
          <p className="projectLangs">
            Java, Spring/Spring Boot, React, Redux, MySQL
          </p>
          <div className="buttonClick">
            <a
              href="https://github.com/Aryanpatel335/product-inventory-manager"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </div>
        </div>

        <div className="projectTile">
          <p className="projectTitle">Post Pic Flask App</p>
          <p className="projectDescription">
            This Flask web app. allows users to post pictures and comment on
            other users' pictures
          </p>
          <p className="projectLangs">
            Python, Flask, Jinja, SQLite, HTML, Bootstrap
          </p>
          <div className="buttonClick">
            <a
              href="https://github.com/Aryanpatel335/Post-Pic-Flask-App"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
            <a
              href="https://postpicflask.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
        <div className="projectTile">
          <p className="projectTitle">PLANNER</p>
          <p className="projectDescription">
            Full stack application that allows users to login and add contact
            information and plan appointments
          </p>
          <p className="projectLangs">
            JavaScript, CSS, React, Redux, MongoDB, Node.js, Express
          </p>
          <div className="buttonClick">
            <a
              href="https://github.com/Aryanpatel335/PLANNER"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
            <a
              href="https://plannerapplication.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
        <div className="projectTile">
          <p className="projectTitle">Spotify Playlist Maker</p>
          <p className="projectDescription">
            Allows users to login to their Spotify account and make a new
            playlist that gets added directly to their account
          </p>
          <p className="projectLangs">JavaScript, CSS, React</p>
          <div className="buttonClick">
            <a
              href="https://github.com/Aryanpatel335/spotify-playlist-maker"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
            <a
              href="https://spotifyplaylistmaker.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
        <div className="projectTile">
          <p className="projectTitle">Reddit Minimalist</p>
          <p className="projectDescription">
            Minimalistic Reddit mock that lets you surf subreddits that are
            provided by the Reddit JSON API
          </p>
          <p className="projectLangs">
            JavaScript, CSS, React, Redux, Reddit JSON API
          </p>
          <div className="buttonClick">
            <a
              href="https://github.com/Aryanpatel335/reddit-minimalist"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
            <a
              href="https://reddit-wrangler.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
