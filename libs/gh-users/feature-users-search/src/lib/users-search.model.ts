import { User } from "@gh-users/data-access";


export interface SearchParams {
  query: string;
  languages?: (typeof LanguagesMap[keyof typeof LanguagesMap])[];
}

export interface Pagination {
  page: number;
  per_page: number;
}

export interface SearchResult {
  total_count: number
  users: User[]
}

export const LanguagesMap: { [key: string]: string } = {
  javascipt: 'javascript',
  python: 'python',
  ruby: 'ruby',
  typescript: 'typescript',
}

export interface UserSearchState {
  searchResult: SearchResult
  searchParams: SearchParams
  pagination: Pagination
}

export const userSearchInitialstate: UserSearchState = {
  searchResult: {
    total_count: 0,
    users: [],
  },
  searchParams: {
    query: '',
    languages: [],
  },
  pagination: {
    page: 1,
    per_page: 20,
  }
}
