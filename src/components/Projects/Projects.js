import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div id="projects">
        <div className="projectTile">
          <p className="projectTitle">Product Inventory Manager</p>
          <p>
            Product inventory manager allows user to notify others on what
            products need to be ordered when inventory is low
          </p>
          <p>Java, Spring/Spring Boot, React, Redux, MySQL</p>
          <a
            href="https://github.com/Aryanpatel335/product-inventory-manager"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </div>

        <div className="projectTile">
          <p className="projectTitle">Post Pic Flask App</p>
          <p>
            This Flask web app. allows users to post pictures and comment on
            other users' pictures
          </p>
          <p>Python, Flask, Jinja, SQLite, HTML, Bootstrap</p>
          <a
            href="https://github.com/Aryanpatel335/Post-Pic-Flask-App"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </div>
        <div className="projectTile">
          <p className="projectTitle">Planner</p>
          <p>
            Full stack application that allows users to login and add contact
            information and plan appointments
          </p>
          <p>JavaScript, CSS, React, Redux, MongoDB, Node.js, Express</p>
          <a
            href="https://github.com/Aryanpatel335/PLANNER"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </div>
        <div className="projectTile">
          <p className="projectTitle">Spotify Playlist Maker</p>
          <p>
            Allows users to login to their Spotify account and make a new
            playlist that gets added directly to their account.
          </p>
          <p>JavaScript, CSS, React</p>
          <a
            href="https://github.com/Aryanpatel335/spotify-playlist-maker"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </div>
        <div className="projectTile">
          <p className="projectTitle">Reddit Wrangler</p>
          <p>
            Minimalistic Reddit mock that lets you surf subreddits that are
            provided by the Reddit JSON API.
          </p>
          <p>JavaScript, CSS, React, Redux, Reddit JSON API</p>
          <a
            href="https://github.com/Aryanpatel335/reddit-wrangler"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};
