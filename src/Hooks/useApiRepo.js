import { useState, useEffect } from "react";
import Axios from "axios";

const useApiRepo = (userName) => {
  const [repos, setRepos] = useState([]);

  const url = `https://api.github.com/users/${userName}/repos`;
  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        setRepos(res.data);
      })

      .catch((err) => console.log(err));
  }, [url]);

  return {
    repoData: repos,
  };
};

export default useApiRepo;
