import { Injectable, inject } from '@angular/core';
import { ApiService } from '@core/http-client';
import { SearchQueryParams, Users } from './users.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly apiService = inject(ApiService);

  query(params: SearchQueryParams): Observable<Users> {
    const { name, page, per_page, languages } = params;
    let query = `${name}`;

    if (languages !== undefined && languages.length > 0) {
      const languagesQuery = languages.map(language => `language:${language}`).join('+');
      query += `+${languagesQuery}`;
    }
    let url = `/search/users?q=${query}`;

    if (page !== undefined) url += `&page=${page}`;
    if (per_page !== undefined) url += `&per_page=${per_page}`;

    return this.apiService.get<Users>(url);
  }
}
