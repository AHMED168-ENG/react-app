import { createSlice } from "@reduxjs/toolkit";
import { ColorServer } from "./color_server";


const ColorInitValue = {}

const defaultState = {
    colors : ColorInitValue,
    isError : false,
    isLoading : false,
    isSuccess : false,
    errors : {},
    message : ""
}

export const ColorSlice = createSlice({
    name : "color",
    initialState: defaultState,
    reducers : {},
    extraReducers : (builder => {
        builder.addCase(ColorServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(ColorServer.fulfilled , (state , action) => {
            state.colors = action.payload.data
            state.isLoading = false
            state.isSuccess = true
            state.errors = {}
        }).addCase(ColorServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.message
            }

        })
    })
})

export const ColorReducer = ColorSlice.reducer
