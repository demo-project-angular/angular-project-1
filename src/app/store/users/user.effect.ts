// user.effects.ts

import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUserById, loadUserByIdSuccess, loadUserByIdFailure } from './user.actions';

import { mergeMap, map, catchError, of } from 'rxjs';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  loadUserById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserById),
      mergeMap(({ id }) =>
        this.userService.getUser().pipe(
          map(users => {
            const user = users.find(u => u.id === id);
            if (user) {
              return loadUserByIdSuccess({ user });
            } else {
              return loadUserByIdFailure({ error: 'User not found' });
            }
          }),
          
          catchError(error =>
            of(loadUserByIdFailure({ error: error.message || 'Unknown error occurred' }))
          )
        )
      )
    )
  );
}
