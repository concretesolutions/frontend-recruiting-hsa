import axios from "axios";

import { BASE_URL } from "../config/api";

export function configureAxios() {
  axios.defaults.baseURL = `${BASE_URL}`;
}

export function fetchUser(username) {
  const url = `users/${username}`;
  return axios.get(url);
}

export function fetchUserRepo(username) {
  const url = `users/${username}/repos`;
  console.log("url: ", url);
  return axios.get(url);
}
