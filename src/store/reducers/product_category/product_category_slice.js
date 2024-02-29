import { createSlice } from "@reduxjs/toolkit";
import { ProductCategoryServer } from "./product_category_server";


const productCategoryInitValue = []

const defaultState = {
    productCategory : productCategoryInitValue,
    isError : false,
    isLoading : false,
    isSuccess : false,
    errors : {},
    message : ""
}

export const productCategorySlice = createSlice({
    name : "productCategory",
    initialState: defaultState,
    reducers : {},
    extraReducers : (builder => {
        builder.addCase(ProductCategoryServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(ProductCategoryServer.fulfilled , (state , action) => {
            state.productCategory = action.payload.data
            state.isLoading = false
            state.isSuccess = true
            state.errors = {}
        }).addCase(ProductCategoryServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.message
            }

        })
    })
})

export const productCategoryReducer = productCategorySlice.reducer
