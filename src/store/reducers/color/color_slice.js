import { createSlice } from "@reduxjs/toolkit";
import { ColorActivationServer, ColorAllServer, ColorCreateServer, ColorDeleteServer, ColorGetOneServer, ColorUpdateOneServer } from "./color_server";


const colorInitValue = {}

const defaultState = {
    colors : colorInitValue,
    color : {},
    isError : false,
    isLoading : false,
    updated : false,
    created : false,
    activation : false,
    deleted : false,
    errors : {},
    message : ""
}

export const ColorSlice = createSlice({
    name : "color",
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
            state.updated = false
            state.activation = false
            state.deleted = false
            state.errors = {}
            state.message = ""
        }
    },
    
    extraReducers : (builder => {
        builder.addCase(ColorAllServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(ColorAllServer.fulfilled , (state , action) => {
            state.colors = action.payload.data
            state.isLoading = false
            state.isSuccess = true
            state.errors = {}
        }).addCase(ColorAllServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.message
            }

        })

        builder.addCase(ColorCreateServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(ColorCreateServer.fulfilled , (state , action) => {
            state.created = true
            state.message = "color created successful !"            
        }).addCase(ColorCreateServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })

        builder.addCase(ColorGetOneServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(ColorGetOneServer.fulfilled , (state , action) => {
            state.color = action.payload.data
            
        }).addCase(ColorGetOneServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })

        builder.addCase(ColorUpdateOneServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(ColorUpdateOneServer.fulfilled , (state , action) => {
            state.updated = true
            state.message = "color updated successful !"            
        }).addCase(ColorUpdateOneServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })

        builder.addCase(ColorActivationServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(ColorActivationServer.fulfilled , (state , action) => {
            state.activation = true
            state.message = `${action.payload.data.active ? "active" : "dis active" } color successful`
        }).addCase(ColorActivationServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })


        builder.addCase(ColorDeleteServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(ColorDeleteServer.fulfilled , (state , action) => {
            state.deleted = true
            state.message = `color delete successful`
        }).addCase(ColorDeleteServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })
    })


    
})

export const ColorReducer = ColorSlice.reducer
export const {setUser , emptyUser , reset} = ColorSlice.actions
