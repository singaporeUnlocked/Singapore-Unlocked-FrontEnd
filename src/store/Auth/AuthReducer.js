import { createSlice } from '@reduxjs/toolkit'

const initialState = user ? { loggedIn: true, user } : {};

const AuthReducer = createSlice({
    name: "sliceAuth",
    initialState,
    reducers: {
        LOGIN = (state, action) => {
            return {
                loggingIn: true,
                user: action.user
              };
        },
        LOGIN_SUCCESS = (state, action) => {
            return {
                loggedIn: true,
                user: action.user
              };
        },
        LOGIN_FAILURE = (state, action) => {
            return {};
        }
    }
});

export const {
    LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS
} = AuthReducer.actions
export default AuthReducer.reducer