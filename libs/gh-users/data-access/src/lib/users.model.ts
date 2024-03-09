export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

// export interface SearchQueryParams {
//   name: string;
//     languages?: (typeof LanguagesMap[keyof typeof LanguagesMap])[];
//   page: number;
//   per_page: number;

// }

// export const LanguagesMap: { [key: string]: string } = {
//   javascipt: 'javascript',
//   python: 'python',
//   ruby: 'ruby',
//   typescript: 'typescript',
// };

export interface Users {
  total_count: number;
  // incomplete_results: boolean;
  items: User[]
}

// export interface UserSearchState {
//   users: Users
//   searchParams: SearchQueryParams
// }

// export const userSearchInitialstate: UserSearchState = {
//   users: {
//     total_count: 0,
//     items: []
//   },
//   searchParams: {
//     name: '',
//     page: 1,
//     per_page: 20,
//     languages: [],
//   }
// }
