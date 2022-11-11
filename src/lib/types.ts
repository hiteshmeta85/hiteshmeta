export interface Repo {
  repo: string;
  link: string;
  description: string;
  stars: number;
  forks: number;
}

export type PinnedRepos = Repo[];
