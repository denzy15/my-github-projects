import React from "react";

const Searchbar = (props) => {
  return (
    <div className="searchbar">
      <input
        placeholder="search repos"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
