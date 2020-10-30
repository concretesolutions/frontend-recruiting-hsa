import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { UserDataInterface, ReposInterface } from '../domain/user';

describe('UserService', () => {
  let httpTestingController: HttpTestingController;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user data', (done: DoneFn) => {
    const user = 'tefap1993';
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
    service.getDataUser(user).subscribe((data) => {
      expect(data).toEqual(userData);
      done();
    });
    const testReq = httpTestingController.expectOne(
      'https://api.github.com/users/tefap1993'
    );
    expect(testReq.request.method).toBe('GET');
    testReq.flush(userData);
  });

  it('should get user repositories', (done: DoneFn) => {
    const user = 'tefap1993';
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
        url:
          'https://api.github.com/repos/tefap1993/angular-bootstrap-lightbox',
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
        clone_url:
          'https://github.com/tefap1993/angular-bootstrap-lightbox.git',
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
      }
    ];
    service.getReposUser(user).subscribe((repos) => {
      expect(repos).toEqual(userRepos);
      done();
    });
    const testReq = httpTestingController.expectOne(
      'https://api.github.com/users/tefap1993/repos'
    );
    expect(testReq.request.method).toBe('GET');
    testReq.flush(userRepos);
  });
});
