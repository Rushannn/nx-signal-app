import { Injectable, inject } from '@angular/core';
import { ApiService } from '@core/http-client';
import { Observable } from 'rxjs';
import { Pagination, SearchParams } from '@gh-users/users-search';
import { SearchResult, UserProfile } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly apiService = inject(ApiService);

  getUsers(searchParams: SearchParams, pagination: Pagination): Observable<SearchResult> {
    const { query, languages } = searchParams;
    const { page, per_page, } = pagination;

    let q = `${query}`;
    if (languages !== undefined && languages.length > 0) {
      const languagesQuery = languages.map(language => `language:${language}`).join('+');
      q += `+${languagesQuery}`;
    }
    let url = `/search/users?q=${q}`;

    if (page !== undefined) url += `&page=${page}`;
    if (per_page !== undefined) url += `&per_page=${per_page}`;

    return this.apiService.get<SearchResult>(url);
  }

  getUser(login: string): Observable<UserProfile> {
    return this.apiService.get<UserProfile>(`/users/${login}`)
  }
}
