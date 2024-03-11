import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { UserSearchState, userSearchInitialstate } from './users-search.model';
import { EMPTY, catchError, of, skip, switchMap, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { SearchParams, SearchResult, UsersService } from '@gh-users/data-access';


@Injectable()
export class UsersSearchStore extends ComponentStore<UserSearchState>{

  constructor(private readonly usersService: UsersService) {
    super(userSearchInitialstate);
  }

  readonly searchResult$ = this.select((store) => store.searchResult);
  readonly searchParams$ = this.select((store) => store.searchParams);
  readonly pagination$ = this.select((store) => store.pagination);

  readonly searchResult = toSignal(this.searchResult$, { initialValue: userSearchInitialstate.searchResult });
  readonly searchParams = toSignal(this.searchParams$, { initialValue: userSearchInitialstate.searchParams });
  readonly pagination = toSignal(this.pagination$, { initialValue: userSearchInitialstate.pagination });



  private setFirstPage() {
    this.patchState({
      pagination: {
        page: 1,
        per_page: this.pagination().per_page,
      }
    })
  }

  updateSearchParams(searchParams: SearchParams) {
    this.patchState({
      searchParams
    });
  }

  updateUsersList(responce: SearchResult) {
    this.patchState({
      searchResult: {
        ...this.searchResult(),
        items: [...this.searchResult().items, ...responce.items]
      }
    })
  }

  changeToNextPage() {
    this.patchState({
      pagination: {
        page: this.pagination().page + 1,
        per_page: this.pagination().per_page,
      }
    });
  }

  readonly searchByParams = this.effect(() => {
    return this.searchParams$.pipe(
      tap(() => this.setFirstPage()),
      switchMap((searchParams) => {
        if (searchParams.query === '') {
          return of({ items: [], total_count: 0, incomplete_results: false });
        }
        return this.usersService.getUsers(searchParams, this.pagination())
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
  });

  readonly addNextPage = this.effect(() => {
    return this.pagination$.pipe(
      skip(1),
      switchMap((pagination) => {
        if (pagination.page === 1) {
          return of(null);
        }
        return this.usersService.getUsers(this.searchParams(), pagination)
      }),
      tap({
        next: ((responce: SearchResult | null) => {
          if (responce) {
            this.updateUsersList(responce)
          }
        }),
        error: (error) => { console.log(error) }
      }),
      catchError(() => EMPTY)
    )
  });

}
