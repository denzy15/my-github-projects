import axios from "axios";
import React, { useEffect, useState } from "react";
import Repo from "./Repo";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    axios.get(`https://api.github.com/users/denzy15/repos`).then((res) => {
      console.log(res.data);
      setRepos(res.data);
    });
  }, []);

  return (
    <div className="repos">
      <div style={{ textAlign: "center" }}>?Searchbar?</div>
      {repos.map((r) => (
        <Repo {...r} />
      ))}
    </div>
  );
};

export default Repos;
