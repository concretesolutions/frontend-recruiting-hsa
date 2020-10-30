import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageComponent } from './user-page.component';
import { UserDataInterface, ReposInterface } from '../../../domain/user';
import { UserService } from '../../../services/user.service';
import { Observable, of, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;
  let spyUserService: jasmine.SpyObj<UserService>;

  let userSubject: Subject<UserDataInterface>;
  let reposSubject: Subject<ReposInterface[]>;

  const userData: UserDataInterface = {
    login: 'tefap1993',
    id: 73407388,
    node_id: 'MDQ6VXNlcjczNDA3Mzg4',
    avatar_url: 'https://avatars0.githubusercontent.com/u/73407388?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/tefap1993',
    html_url: 'https://github.com/tefap1993',
    followers_url: 'https://api.github.com/users/tefap1993/followers',
    following_url:
      'https://api.github.com/users/tefap1993/following{/other_user}',
    gists_url: 'https://api.github.com/users/tefap1993/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/tefap1993/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/tefap1993/subscriptions',
    organizations_url: 'https://api.github.com/users/tefap1993/orgs',
    repos_url: 'https://api.github.com/users/tefap1993/repos',
    events_url: 'https://api.github.com/users/tefap1993/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/tefap1993/received_events',
    type: 'User',
    site_admin: false,
    name: 'Estefany Pacheco',
    company: '3it',
    blog: '',
    location: 'Santiago, Chile',
    email: null,
    hireable: null,
    bio: 'Front end developer and Graphic designer. Love to learn.',
    twitter_username: 'tefap93',
    public_repos: 4,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: new Date(),
    updated_at: new Date()
  };
  const userRepos: ReposInterface[] = [
    {
      id: 308088711,
      node_id: 'MDEwOlJlcG9zaXRvcnkzMDgwODg3MTE=',
      name: 'angular-bootstrap-lightbox',
      full_name: 'tefap1993/angular-bootstrap-lightbox',
      private: false,
      owner: {
        login: 'tefap1993',
        id: 73407388,
        node_id: 'MDQ6VXNlcjczNDA3Mzg4',
        avatar_url: 'https://avatars0.githubusercontent.com/u/73407388?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/tefap1993',
        html_url: 'https://github.com/tefap1993',
        followers_url: 'https://api.github.com/users/tefap1993/followers',
        following_url:
          'https://api.github.com/users/tefap1993/following{/other_user}',
        gists_url: 'https://api.github.com/users/tefap1993/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/tefap1993/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/tefap1993/subscriptions',
        organizations_url: 'https://api.github.com/users/tefap1993/orgs',
        repos_url: 'https://api.github.com/users/tefap1993/repos',
        events_url: 'https://api.github.com/users/tefap1993/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/tefap1993/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/tefap1993/angular-bootstrap-lightbox',
      description: 'An AngularJS lightbox built using UI Bootstrap Modal.',
      fork: true,
      url: 'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox',
      forks_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/forks',
      keys_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/teams',
      hooks_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/hooks',
      issue_events_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/events',
      assignees_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/tags',
      blobs_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/languages',
      stargazers_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/stargazers',
      contributors_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/contributors',
      subscribers_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/subscribers',
      subscription_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/subscription',
      commits_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/merges',
      archive_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/downloads',
      issues_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/labels{/name}',
      releases_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox/deployments',
      created_at: '2020-10-28T17:14:47Z',
      updated_at: '2020-10-28T17:14:48Z',
      pushed_at: '2016-07-11T13:31:37Z',
      git_url: 'git://github.com/tefap1993/angular-bootstrap-lightbox.git',
      ssh_url: 'git@github.com:tefap1993/angular-bootstrap-lightbox.git',
      clone_url: 'https://github.com/tefap1993/angular-bootstrap-lightbox.git',
      svn_url: 'https://github.com/tefap1993/angular-bootstrap-lightbox',
      homepage: 'http://compact.github.io/angular-bootstrap-lightbox/',
      size: 577,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master'
    },
    {
      id: 306979503,
      node_id: 'MDEwOlJlcG9zaXRvcnkzMDY5Nzk1MDM=',
      name: 'frontend-recruiting-hsa',
      full_name: 'tefap1993/frontend-recruiting-hsa',
      private: false,
      owner: {
        login: 'tefap1993',
        id: 73407388,
        node_id: 'MDQ6VXNlcjczNDA3Mzg4',
        avatar_url: 'https://avatars0.githubusercontent.com/u/73407388?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/tefap1993',
        html_url: 'https://github.com/tefap1993',
        followers_url: 'https://api.github.com/users/tefap1993/followers',
        following_url:
          'https://api.github.com/users/tefap1993/following{/other_user}',
        gists_url: 'https://api.github.com/users/tefap1993/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/tefap1993/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/tefap1993/subscriptions',
        organizations_url: 'https://api.github.com/users/tefap1993/orgs',
        repos_url: 'https://api.github.com/users/tefap1993/repos',
        events_url: 'https://api.github.com/users/tefap1993/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/tefap1993/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/tefap1993/frontend-recruiting-hsa',
      description: null,
      fork: true,
      url: 'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa',
      forks_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/forks',
      keys_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/teams',
      hooks_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/hooks',
      issue_events_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/events',
      assignees_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/tags',
      blobs_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/languages',
      stargazers_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/stargazers',
      contributors_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/contributors',
      subscribers_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/subscribers',
      subscription_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/subscription',
      commits_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/merges',
      archive_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/downloads',
      issues_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/labels{/name}',
      releases_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/tefap1993/frontend-recruiting-hsa/deployments',
      created_at: '2020-10-24T22:04:14Z',
      updated_at: '2020-10-24T22:04:15Z',
      pushed_at: '2020-10-29T23:57:33Z',
      git_url: 'git://github.com/tefap1993/frontend-recruiting-hsa.git',
      ssh_url: 'git@github.com:tefap1993/frontend-recruiting-hsa.git',
      clone_url: 'https://github.com/tefap1993/frontend-recruiting-hsa.git',
      svn_url: 'https://github.com/tefap1993/frontend-recruiting-hsa',
      homepage: null,
      size: 1263,
      stargazers_count: 1,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master'
    },
    {
      id: 308088751,
      node_id: 'MDEwOlJlcG9zaXRvcnkzMDgwODg3NTE=',
      name: 'landonpollack',
      full_name: 'tefap1993/landonpollack',
      private: false,
      owner: {
        login: 'tefap1993',
        id: 73407388,
        node_id: 'MDQ6VXNlcjczNDA3Mzg4',
        avatar_url: 'https://avatars0.githubusercontent.com/u/73407388?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/tefap1993',
        html_url: 'https://github.com/tefap1993',
        followers_url: 'https://api.github.com/users/tefap1993/followers',
        following_url:
          'https://api.github.com/users/tefap1993/following{/other_user}',
        gists_url: 'https://api.github.com/users/tefap1993/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/tefap1993/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/tefap1993/subscriptions',
        organizations_url: 'https://api.github.com/users/tefap1993/orgs',
        repos_url: 'https://api.github.com/users/tefap1993/repos',
        events_url: 'https://api.github.com/users/tefap1993/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/tefap1993/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/tefap1993/landonpollack',
      description: null,
      fork: true,
      url: 'https://api.github.com/repos/tefap1993/landonpollack',
      forks_url: 'https://api.github.com/repos/tefap1993/landonpollack/forks',
      keys_url:
        'https://api.github.com/repos/tefap1993/landonpollack/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/tefap1993/landonpollack/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/tefap1993/landonpollack/teams',
      hooks_url: 'https://api.github.com/repos/tefap1993/landonpollack/hooks',
      issue_events_url:
        'https://api.github.com/repos/tefap1993/landonpollack/issues/events{/number}',
      events_url: 'https://api.github.com/repos/tefap1993/landonpollack/events',
      assignees_url:
        'https://api.github.com/repos/tefap1993/landonpollack/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/tefap1993/landonpollack/branches{/branch}',
      tags_url: 'https://api.github.com/repos/tefap1993/landonpollack/tags',
      blobs_url:
        'https://api.github.com/repos/tefap1993/landonpollack/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/tefap1993/landonpollack/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/tefap1993/landonpollack/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/tefap1993/landonpollack/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/tefap1993/landonpollack/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/tefap1993/landonpollack/languages',
      stargazers_url:
        'https://api.github.com/repos/tefap1993/landonpollack/stargazers',
      contributors_url:
        'https://api.github.com/repos/tefap1993/landonpollack/contributors',
      subscribers_url:
        'https://api.github.com/repos/tefap1993/landonpollack/subscribers',
      subscription_url:
        'https://api.github.com/repos/tefap1993/landonpollack/subscription',
      commits_url:
        'https://api.github.com/repos/tefap1993/landonpollack/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/tefap1993/landonpollack/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/tefap1993/landonpollack/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/tefap1993/landonpollack/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/tefap1993/landonpollack/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/tefap1993/landonpollack/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/tefap1993/landonpollack/merges',
      archive_url:
        'https://api.github.com/repos/tefap1993/landonpollack/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/tefap1993/landonpollack/downloads',
      issues_url:
        'https://api.github.com/repos/tefap1993/landonpollack/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/tefap1993/landonpollack/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/tefap1993/landonpollack/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/tefap1993/landonpollack/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/tefap1993/landonpollack/labels{/name}',
      releases_url:
        'https://api.github.com/repos/tefap1993/landonpollack/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/tefap1993/landonpollack/deployments',
      created_at: '2020-10-28T17:14:56Z',
      updated_at: '2020-10-28T17:14:58Z',
      pushed_at: '2018-10-10T23:33:03Z',
      git_url: 'git://github.com/tefap1993/landonpollack.git',
      ssh_url: 'git@github.com:tefap1993/landonpollack.git',
      clone_url: 'https://github.com/tefap1993/landonpollack.git',
      svn_url: 'https://github.com/tefap1993/landonpollack',
      homepage: null,
      size: 492,
      stargazers_count: 8,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master'
    },
    {
      id: 308088738,
      node_id: 'MDEwOlJlcG9zaXRvcnkzMDgwODg3Mzg=',
      name: 'prueba-master',
      full_name: 'tefap1993/prueba-master',
      private: false,
      owner: {
        login: 'tefap1993',
        id: 73407388,
        node_id: 'MDQ6VXNlcjczNDA3Mzg4',
        avatar_url: 'https://avatars0.githubusercontent.com/u/73407388?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/tefap1993',
        html_url: 'https://github.com/tefap1993',
        followers_url: 'https://api.github.com/users/tefap1993/followers',
        following_url:
          'https://api.github.com/users/tefap1993/following{/other_user}',
        gists_url: 'https://api.github.com/users/tefap1993/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/tefap1993/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/tefap1993/subscriptions',
        organizations_url: 'https://api.github.com/users/tefap1993/orgs',
        repos_url: 'https://api.github.com/users/tefap1993/repos',
        events_url: 'https://api.github.com/users/tefap1993/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/tefap1993/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/tefap1993/prueba-master',
      description: null,
      fork: true,
      url: 'https://api.github.com/repos/tefap1993/prueba-master',
      forks_url: 'https://api.github.com/repos/tefap1993/prueba-master/forks',
      keys_url:
        'https://api.github.com/repos/tefap1993/prueba-master/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/tefap1993/prueba-master/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/tefap1993/prueba-master/teams',
      hooks_url: 'https://api.github.com/repos/tefap1993/prueba-master/hooks',
      issue_events_url:
        'https://api.github.com/repos/tefap1993/prueba-master/issues/events{/number}',
      events_url: 'https://api.github.com/repos/tefap1993/prueba-master/events',
      assignees_url:
        'https://api.github.com/repos/tefap1993/prueba-master/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/tefap1993/prueba-master/branches{/branch}',
      tags_url: 'https://api.github.com/repos/tefap1993/prueba-master/tags',
      blobs_url:
        'https://api.github.com/repos/tefap1993/prueba-master/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/tefap1993/prueba-master/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/tefap1993/prueba-master/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/tefap1993/prueba-master/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/tefap1993/prueba-master/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/tefap1993/prueba-master/languages',
      stargazers_url:
        'https://api.github.com/repos/tefap1993/prueba-master/stargazers',
      contributors_url:
        'https://api.github.com/repos/tefap1993/prueba-master/contributors',
      subscribers_url:
        'https://api.github.com/repos/tefap1993/prueba-master/subscribers',
      subscription_url:
        'https://api.github.com/repos/tefap1993/prueba-master/subscription',
      commits_url:
        'https://api.github.com/repos/tefap1993/prueba-master/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/tefap1993/prueba-master/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/tefap1993/prueba-master/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/tefap1993/prueba-master/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/tefap1993/prueba-master/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/tefap1993/prueba-master/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/tefap1993/prueba-master/merges',
      archive_url:
        'https://api.github.com/repos/tefap1993/prueba-master/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/tefap1993/prueba-master/downloads',
      issues_url:
        'https://api.github.com/repos/tefap1993/prueba-master/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/tefap1993/prueba-master/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/tefap1993/prueba-master/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/tefap1993/prueba-master/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/tefap1993/prueba-master/labels{/name}',
      releases_url:
        'https://api.github.com/repos/tefap1993/prueba-master/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/tefap1993/prueba-master/deployments',
      created_at: '2020-10-28T17:14:53Z',
      updated_at: '2020-10-28T17:14:55Z',
      pushed_at: '2018-10-09T10:07:56Z',
      git_url: 'git://github.com/tefap1993/prueba-master.git',
      ssh_url: 'git@github.com:tefap1993/prueba-master.git',
      clone_url: 'https://github.com/tefap1993/prueba-master.git',
      svn_url: 'https://github.com/tefap1993/prueba-master',
      homepage: null,
      size: 1188,
      stargazers_count: 5,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master'
    }
  ];
  beforeEach(async () => {
    spyUserService = jasmine.createSpyObj<UserService>('UserService', [
      'getDataUser',
      'getReposUser'
    ]);

    userSubject = new Subject();
    reposSubject = new Subject();

    spyUserService.getDataUser.and.returnValue(userSubject);
    spyUserService.getReposUser.and.returnValue(reposSubject);
    await TestBed.configureTestingModule({
      declarations: [UserPageComponent],
      providers: [
        { provide: UserService, useValue: spyUserService },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ user: 'tefap1993' })
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show user data', () => {
    userSubject.next(userData);
    expect(component.userData).toEqual(userData);
  });

  it('should call user repos when user exists', () => {
    userSubject.next(userData);
    reposSubject.next(userRepos);
    expect(component.userRepos).toEqual(userRepos);
    expect(component.stars).toBeGreaterThanOrEqual(0);
  });

  it('should show not found message when user does not exists ', () => {
    userSubject.error({});
    expect(component.userData).toBe(undefined);
    expect(component.loading).toBeFalsy();
  });
});
