export const environment = {
  production: true,
  api: {
    github: {
      getUser: 'https://api.github.com/users/{username}',
      getUserRepos: 'https://api.github.com/users/{username}/repos'
    }
  }
};
