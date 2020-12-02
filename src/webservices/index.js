import axios from "axios";

import { BASE_URL } from "../config/api";

export function configureAxios() {
  axios.defaults.baseURL = `${BASE_URL}`;
  // Here also we can add default headers content type
}

export function fetchUsername(username) {
  const url = `users/${username}`;
  console.log("url: ", url);
  return axios.get(url);
}
