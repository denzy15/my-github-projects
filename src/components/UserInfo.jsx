import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const UserInfo = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`https://api.github.com/users/denzy15`).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div className="user-info">
      <div className="user-photo">
        <img src={user.avatar_url} alt="ava" />
      </div>
      <section className="user-about">
        <h2 className="user-name">{user.name}</h2>
        <h4>@{user.login}</h4>
        <h3 className="user-bio">{user.bio}</h3>
        <h3 className="user-location">Location: {user.location}</h3>
        <h3 className="user-repo-num">Repositories: {user.public_repos}</h3>
      </section>
    </div>
  );
};

export default UserInfo;
