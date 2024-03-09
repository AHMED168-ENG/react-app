import { createSlice } from "@reduxjs/toolkit";
import { UserActivationServer, UserAllServer, UserBlockingServer, UserCreateServer, UserDeleteServer, UserGetOneServer, UserUpdateOneServer, UserUploadImageServer } from "./user_server";


const userInitValue = []

const defaultState = {
    users : userInitValue,
    user : {},
    isError : false,
    isLoading : false,
    created : false,
    imageUpload : false,
    updated : false,
    activation : false,
    deleted : false,
    errors : {},
    message : ""
}

export const UserSlice = createSlice({
    name : "user",
    initialState: defaultState,
    reducers : {
        setUser(state , action) {
            state.user = action.payload
        },
        emptyUser(state , action) {
            state.user = {}
        },
        reset(state ) {
            state.isError = false
            state.isLoading = false
            state.created = false
            state.imageUpload = false
            state.updated = false
            state.activation = false
            state.deleted = false
            state.errors = {}
            state.message = ""

        }
    },
    
    extraReducers : (builder => {
        builder.addCase(UserAllServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(UserAllServer.fulfilled , (state , action) => {
            state.users = action.payload.data
        }).addCase(UserAllServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })

        builder.addCase(UserCreateServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(UserCreateServer.fulfilled , (state , action) => {
            state.created = true
            state.message = "user created successful !"            
        }).addCase(UserCreateServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })

        builder.addCase(UserGetOneServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(UserGetOneServer.fulfilled , (state , action) => {
            state.user = action.payload.data
            
        }).addCase(UserGetOneServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })

        builder.addCase(UserUpdateOneServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(UserUpdateOneServer.fulfilled , (state , action) => {
            state.updated = true
            state.message = "user updated successful !"            
        }).addCase(UserUpdateOneServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })


        builder.addCase(UserUploadImageServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(UserUploadImageServer.fulfilled , (state , action) => {
            state.imageUpload = true
            state.message = "image updated successful !"
        }).addCase(UserUploadImageServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })

        builder.addCase(UserActivationServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(UserActivationServer.fulfilled , (state , action) => {
            state.activation = true
            state.message = `${action.payload.data.active ? "active" : "dis active" } user successful`
        }).addCase(UserActivationServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })

        builder.addCase(UserBlockingServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(UserBlockingServer.fulfilled , (state , action) => {
            state.activation = true
            state.message = `${action.payload.data.isBlock ? "block" : "de block" } user successful`
        }).addCase(UserBlockingServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })

        builder.addCase(UserDeleteServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(UserDeleteServer.fulfilled , (state , action) => {
            state.deleted = true
            state.message = `user delete successful`
        }).addCase(UserDeleteServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })



    }),
})

export const UserReducer = UserSlice.reducer
export const {setUser , emptyUser , reset} = UserSlice.actions
