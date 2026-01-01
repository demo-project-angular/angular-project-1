import { createReducer, on } from "@ngrx/store";
import { UserDetails } from "../../models/user.model";
import { loadUserById, loadUserByIdFailure, loadUserByIdSuccess } from "./user.actions";
import { User } from "../../ApiUsefolder/user/user";

// export interface UserState {
//     user: UserDetails | null;
//     loading: boolean;
//     error: any;
// }

// const initialState: UserState = {
//     user: null,
//     loading: false,
//     error: null
// }

// export const userReducer = createReducer(
//     initialState,
//     on(loadUserById, (state) => ({ ...state, loading: true ,error:null, user:null})),
//     on(loadUserByIdSuccess, (state, { user }) => ({ ...state, user, loading: false })),
//     on(loadUserByIdFailure, (state, { error }:any) => ({ ...state, error, loading: false }))
// )

export interface UserState {
    user: UserDetails | null;
    loading: boolean;
    error: any;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null

}

export const userReducer = createReducer(
    initialState,
    on(loadUserById, (state) => ({ ...state, loading: true, error: null, user: null })),
    on(loadUserByIdSuccess, (state, { user }) => ({ ...state, user, loading: false })),
    on(loadUserByIdFailure, (state, { error }: any) => ({ ...state, error, loading: false }))

)