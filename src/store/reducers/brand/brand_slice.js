import { createSlice } from "@reduxjs/toolkit";
import { BrandServer } from "./brand_server";


const BrandInitValue = {}

const defaultState = {
    brands : BrandInitValue,
    isError : false,
    isLoading : false,
    isSuccess : false,
    errors : {},
    message : ""
}

export const BrandSlice = createSlice({
    name : "brand",
    initialState: defaultState,
    reducers : {},
    extraReducers : (builder => {
        builder.addCase(BrandServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(BrandServer.fulfilled , (state , action) => {
            state.brands = action.payload.data
            state.isLoading = false
            state.isSuccess = true
            state.errors = {}
        }).addCase(BrandServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.message
            }

        })
    })
})

export const BrandReducer = BrandSlice.reducer
