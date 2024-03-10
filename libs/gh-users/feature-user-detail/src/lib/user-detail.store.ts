import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { UserProfile, UsersService } from "@gh-users/data-access";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { filter, switchMap, tap } from "rxjs";

type Status = 'init' | 'loading' | 'loaded';

export interface UserDetailState {
  userProfile?: UserProfile
  status: Status
}

const userDetailStateInit: UserDetailState = {
  status: 'init'
}


@Injectable()
export class UserDetailStore extends ComponentStore<UserDetailState> {
  constructor(
    private readonly userService: UsersService
  ) {
    super(userDetailStateInit)
  }

  readonly userProfile = toSignal(this.select((state) => state.userProfile));

  private updateStatus(status: Status) {
    this.patchState({
      status
    })
  }

  // private readonly setUser = this.updater(
  //   (state: UserDetailState, user: UserProfile) => ({
  //     ...state,
  //     user
  //   })
  // );

  private setUser(userProfile: UserProfile) {
    this.patchState({
      userProfile
    })
  }

  readonly checkUserProfile = this.effect(userProfile$ =>
    userProfile$.pipe(
      tap((user) => console.log('checkUserProfile user', user))
    ))


  readonly getUser = this.effect<string | undefined>((login$) =>
    login$.pipe(
      filter((login): login is string => !!login),
      tap(() => this.updateStatus('loading')),
      switchMap((login) =>
        this.userService.getUser(login).pipe(
          tapResponse({
            next: (user) => this.setUser(user),
            error: (error: HttpErrorResponse) => console.log(error.message),
            finalize: () => this.updateStatus('loaded'),
          }))
      ),
    )
  );

}
