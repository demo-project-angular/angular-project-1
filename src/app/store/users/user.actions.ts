import { createAction, props } from "@ngrx/store";
import { create } from "domain";
import { UserDetails } from "../../models/user.model";

// export const loadUserById = createAction(
//     '[User] Load user by id',
//     props<{ id: number }>()
// );
// export const loadUserByIdSuccess = createAction(
//     '[User] load user by id success',
//     props<{ user: UserDetails }>()
// );

// export const loadUserByIdFailure = createAction(
//     '[User] load user by id error',
//     props<{ error: any }>()
// );

export const loadUserById = createAction(
    '[User] Load user by id',
    props<{ id: number }>()
);

export const loadUserByIdSuccess = createAction(
    '[User] Load user by id success',
    props<{ user: UserDetails }>()
);

export const loadUserByIdFailure = createAction(
    '[user] Load user by id error',
    props<{ error: any }>()

)