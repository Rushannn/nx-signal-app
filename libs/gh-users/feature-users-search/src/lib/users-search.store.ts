import {
  signalStore,
  withComputed,
  withHooks,
  withMethods,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe } from 'rxjs';

export const UsersSearchStore = signalStore(
  withMethods(()=> ({
    query: rxMethod<any>(
      pipe()
    )
  }))
)
