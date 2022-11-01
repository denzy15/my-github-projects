import React from "react";

import SCSS from "../assets/lang-icons/SCSS.svg";
import JavaScript from "../assets/lang-icons/JavaScript.svg";
import HTML from "../assets/lang-icons/HTML.svg";
import CSS from "../assets/lang-icons/CSS.svg";
import TypeScript from "../assets/lang-icons/TypeScript.svg";
import Csharp from "../assets/lang-icons/Csharp.svg";
import Java from "../assets/lang-icons/Java.svg";
import Python from "../assets/lang-icons/python.svg";

const icons = {
  SCSS,
  JavaScript,
  HTML,
  CSS,
  TypeScript,
  Java,
  "C#": Csharp,
  Python,
};

const Repo = (props) => {
  let lang;
  for (const icon of Object.entries(icons)) {
    if (icon[0] === props.language) {
      lang = icon[1];
      break;
    }
  }

  return (
    <li className="repo">
      <h2 className="repo-name">{props.name}</h2>
      <span className="repo-desc">{props.description || "No description"}</span>
      {lang && (
        <div className="repo-lang">
          <img src={lang} alt="lang" width={25} />
          <span>{props.language}</span>
        </div>
      )}
      {props.homepage ? (
        <div className="repo-view">
          <a
            href={props.homepage}
            target="_blank"
            className="repo-view-btn"
            rel="noreferrer"
          >
            View page
          </a>
          <a
            href={props.html_url}
            className="repo-view-btn"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
      ) : (
        <a href={props.html_url} className="repo-view-btn">
          View Code
        </a>
      )}
    </li>
  );
};

export default Repo;
