export interface UserProfile {
  name: string;
  userName: string;
  email: string;
  avatarUrl: string;
  bio: string;
  followers: number;
  url: string;
}

export interface Repository {
  name: string;
  description: string;
  stars: number;
  url: string;
}
export interface GithubUserDetails {
  profile: UserProfile;
  repositories: Repository[];
}
