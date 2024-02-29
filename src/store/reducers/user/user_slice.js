import { createSlice } from "@reduxjs/toolkit";
import { UserServer } from "./user_server";


const userInitValue = []

const defaultState = {
    users : userInitValue,
    isError : false,
    isLoading : false,
    isSuccess : false,
    errors : {},
    message : ""
}

export const UserSlice = createSlice({
    name : "user",
    initialState: defaultState,
    reducers : {},
    extraReducers : (builder => {
        builder.addCase(UserServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(UserServer.fulfilled , (state , action) => {
            state.users = action.payload.data
            state.isLoading = false
            state.isSuccess = true
            state.errors = {}
        }).addCase(UserServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.message
            }

        })
    })
})

export const UserReducer = UserSlice.reducer
