import { Injectable } from '@angular/core';
import { UsersService } from '@gh-users/data-access';
import { ComponentStore } from '@ngrx/component-store';
import { SearchParams, SearchResult, UserSearchState, userSearchInitialstate } from './users-search.model';
import { EMPTY, catchError, combineLatest, of, switchMap, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';


@Injectable()
export class UsersSearchStore extends ComponentStore<UserSearchState>{

  constructor(private readonly usersService: UsersService) {
    super(userSearchInitialstate);

    this.effect(() => {
      return combineLatest([this.searchParams$, this.pagination$]).pipe(
        switchMap(([searchParams, pagination]) => {
          if (searchParams.query === '') {
            return of({ items: [], total_count: 0, incomplete_results: false });
          }
          return this.usersService.getUsers(searchParams, pagination)
        }),
        tap({
          next: (res: SearchResult) => {
            console.log(res)
            this.patchState({ searchResult: res })
          },
          error: (error) => { console.log(error) }
        }),
        catchError(() => EMPTY)
      )
    })
  }


  searchResult$ = this.select((store) => store.searchResult);
  searchParams$ = this.select((store) => store.searchParams);
  pagination$ = this.select((store) => store.pagination);




  updateSearchParams(searchParams: SearchParams) {
    this.patchState({
      searchParams
    });
  }

  onPageChange(page: number) {
    const pagination = {
      ...this.get((state) => state.pagination),
      page,
    };

    this.patchState({
      pagination,
    });
  }


  readonly searchResult = toSignal(this.searchResult$, { initialValue: userSearchInitialstate.searchResult });
  readonly searchParams = toSignal(this.searchParams$, { initialValue: userSearchInitialstate.searchParams });
  readonly pagination = toSignal(this.pagination$, { initialValue: userSearchInitialstate.pagination });


}
