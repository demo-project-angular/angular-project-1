import { UserState } from "./user.reducer";
import { createFeatureSelector, createSelector, State } from '@ngrx/store';

export const selectUserstate = createFeatureSelector<UserState>('userState')

export const selectUser = createSelector(selectUserstate, (state) => state.user);
export const selectLoading = createSelector(selectUserstate, (state) => state.loading);
export const selectError = createSelector(selectUserstate, (state) => state.error);