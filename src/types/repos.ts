export type RepoType = {
  rank: number;
  username: string;
  repositoryName: string;
  description: string;
  language: string;
  languageColor: string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: builtByType[]
}

export type builtByType = {
  username: string;
  url: string;
  avatar: string;
}