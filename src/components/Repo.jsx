import React from "react";

import SCSS from "../assets/SCSS.svg";
import JavaScript from "../assets/JavaScript.svg";
import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";

const icons = {
  SCSS: SCSS,
  JavaScript: JavaScript,
  HTML: HTML,
  CSS: CSS,
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
      <span className="repo-desc">{props.description || "no description"}</span>
      {lang && (
        <div className="repo-lang">
          <img src={lang} alt="lang" width={25} />
          <span>{props.language}</span>
        </div>
      )}
      <a href={props.html_url} className="repo-code">
        View Code
      </a>
    </li>
  );
};

export default Repo;
