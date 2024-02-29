import { createSlice } from "@reduxjs/toolkit";
import { ProductServer } from "./product_server";


const productInitValue = []

const defaultState = {
    products : productInitValue,
    isError : false,
    isLoading : false,
    isSuccess : false,
    errors : {},
    message : ""
}

export const ProductSlice = createSlice({
    name : "product",
    initialState: defaultState,
    reducers : {},
    extraReducers : (builder => {
        builder.addCase(ProductServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(ProductServer.fulfilled , (state , action) => {
            state.products = action.payload.data
            state.isLoading = false
            state.isSuccess = true
            state.errors = {}
        }).addCase(ProductServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.message
            }

        })
    })
})

export const ProductReducer = ProductSlice.reducer
