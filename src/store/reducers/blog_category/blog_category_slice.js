import { createSlice } from "@reduxjs/toolkit";
import { BlogCategoryServer } from "./blog_category_server";


const blogCategoryInitValue = []

const defaultState = {
    blogCategory : blogCategoryInitValue,
    isError : false,
    isLoading : false,
    isSuccess : false,
    errors : {},
    message : ""
}

export const BlogCategorySlice = createSlice({
    name : "blogCategory",
    initialState: defaultState,
    reducers : {},
    extraReducers : (builder => {
        builder.addCase(BlogCategoryServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(BlogCategoryServer.fulfilled , (state , action) => {
            state.blogCategory = action.payload.data
            state.isLoading = false
            state.isSuccess = true
            state.errors = {}
        }).addCase(BlogCategoryServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.message
            }

        })
    })
})

export const BlogCategoryReducer = BlogCategorySlice.reducer
