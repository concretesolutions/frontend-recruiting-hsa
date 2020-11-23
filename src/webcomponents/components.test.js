import React from 'react';
import { render } from '@testing-library/react';
import { RepoCard, UserCard, SearchBar } from "./components"

 /* Test Suite for render method of the User Card, Repo Card and the Search Bar */

const userData = {
  name: "0",
  login: "0",
  avatar_url: "0",
  html_url: "0",
  email: "0",
  bio: "0",
  followers: "0",
  following: "0"
}

const repoData = {
  name: "0",
  stargazers_count: "0",
  language: "0",
  html_url: "0",
  private: "0",
  open_issues_count: "0",
  watchers: "0",
}

describe('UserCard', () => {
  test('renders UserCard component', () => {
    render(<UserCard userData={userData} />);
  });
});

describe('RepoCard', () => {
  test('renders RepoCard component', () => {
    render(<RepoCard repoData={repoData} />);
  });
});

describe('SearchBar', () => {
  test('renders App component', () => {
    render(<SearchBar/>);
  });
});