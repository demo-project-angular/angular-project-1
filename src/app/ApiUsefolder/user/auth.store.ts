// src/app/stores/auth.store.ts
import { computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import {
  signalStore,
  withState,
  withComputed,
  withMethods,
  patchState,
} from '@ngrx/signals';

interface AuthState {
  userName: string | null;
  token: string | null;
  isLoading: boolean;
  errorMessage: string | null;
}

export const AuthStore = signalStore(
  { providedIn: 'root' },

  // 1. withState → initial state
  withState<AuthState>({
    userName: null,
    token: null,
    isLoading: false,
    errorMessage: null,
  }),

  // 2. withComputed → derived values
  withComputed((store) => ({
    // logged in status based on token
    isLoggedIn: computed(() => !!store.token()),
  })),

  // 3. withMethods → login API call logic
  withMethods((store) => {
    const http = inject(HttpClient);

    return {
      async login(userName: string, password: string) {
        // show loader
        patchState(store, { isLoading: true, errorMessage: null });

        try {
          // API call → change url to your real backend
          const response = await firstValueFrom(
            http.post<{ token: string }>(
              'https://dummyjson.com/auth/login',
              {
                username: userName,
                password: password,
              }
            )
          );

          // save token
          patchState(store, {
            userName: userName,
            token: response.token,
            isLoading: false,
            errorMessage: null,
          });

          // store token to localStorage
          localStorage.setItem('auth_token', response.token);
        } catch (error) {
          // error state
          patchState(store, {
            isLoading: false,
            errorMessage: 'Login failed. Try again!',
          });
          console.error('Login error:', error);
        }
      },
      logout() {
        patchState(store, {
          userName: null,
          token: null,
        });
        localStorage.removeItem('auth_token');
      },
    };
  })
);
