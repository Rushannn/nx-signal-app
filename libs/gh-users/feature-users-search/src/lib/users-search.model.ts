import { Pagination, SearchParams, SearchResult } from "@gh-users/data-access"

export interface UserSearchState {
  searchResult: SearchResult
  searchParams: SearchParams
  pagination: Pagination
}

export const userSearchInitialstate: UserSearchState = {
  searchResult: {
    total_count: 0,
    items: [],
    incomplete_results: false
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
