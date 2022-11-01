import axios from "axios";
import { useEffect, useState } from "react";
import Repo from "./Repo";
import Searchbar from "./Searchbar";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get(`https://api.github.com/users/denzy15/repos`).then((res) => {
      setRepos(res.data);
    });
  }, []);

  let filteredRepos = repos.filter((repo) => {
    if (searchValue === "") {
      return repo;
    } else {
      return (
        repo.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        (repo.language &&
          repo.language.toLowerCase().includes(searchValue.toLowerCase())) ||
        (repo.description &&
          repo.description.toLowerCase().includes(searchValue.toLowerCase()))
      );
    }
  });

  return (
    <div className="repos">
      <Searchbar value={searchValue} setValue={setSearchValue} />
      <ul className="repos-list">
        {filteredRepos.map((r) => (
          <Repo
            {...r}
            key={r.id}
            value={searchValue}
            setValue={setSearchValue}
          />
        ))}
      </ul>
    </div>
  );
};

export default Repos;
