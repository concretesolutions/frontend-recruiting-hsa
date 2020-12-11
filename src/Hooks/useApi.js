import { useState, useEffect } from "react";
import Axios from "axios";

const useApi = (userName) => {
  const [user, setUser] = useState({ avatar_url: "" });

  const url = `https://api.github.com/users/${userName}`;

  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })

      .catch((err) => console.log(err));
  }, [url, userName]);

  return {
    userData: user,
  };
};

export default useApi;
