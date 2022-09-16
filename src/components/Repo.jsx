import React from "react";

const Repo = (props) => {
  return (
    <li key={props.id}>
      <h2>{props.name}</h2>
      <span>{props.description || "no description"}</span>
    </li>
  );
};

export default Repo;
