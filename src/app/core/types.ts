export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  url: string;
  html_url: string;
  repos_url: string;
  name: string;
  company?: string;
  blog: string;
  location?: string;
  email?: string;
  bio?: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface Repo {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}
