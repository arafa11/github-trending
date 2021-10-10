export type DeveloperType = {
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: string;
  popularRepository: {
    repositoryName: string;
    description: string;
    url: string
  }
}
