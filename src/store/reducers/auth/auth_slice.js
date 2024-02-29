import { createSlice } from "@reduxjs/toolkit";
import { AuthLogin } from "./auth_server";
import { setToken } from "../../../utility/setTokeninHeader";


const userInitValue = {
    firstName : null,
    lastName : null,
    email : null,
    mobile : null,
}
const userInitValueData = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : userInitValue
const token = localStorage.getItem("token") ? localStorage.getItem("token") : null
setToken(token)

const defaultState = {
    user : userInitValueData,
    token : token,
    isError : false,
    isLoading : false,
    isSuccess : false,
    errors : {},
    message : ""
}

export const AuthSlice = createSlice({
    name : "auth",
    initialState: defaultState,
    reducers : {

    },
    extraReducers : (builder => {
        builder.addCase(AuthLogin.pending , (state , action) => {
            state.user = null
            state.errors = {}
            state.isError = false
            state.isLoading = true
            state.isSuccess = false
        }).addCase(AuthLogin.fulfilled , (state , action) => {
            const {firstName , lastName, email , mobile} = action.payload.data.user
            state.user = {firstName , lastName, email , mobile}
            state.isError = false
            state.isLoading = false
            state.isSuccess = true
            state.token = action.payload.data.token
            state.errors = {}
        }).addCase(AuthLogin.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.message
            }

        })
    })
})

export const AuthReducer = AuthSlice.reducer
