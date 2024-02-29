import { createSlice } from "@reduxjs/toolkit";
import { BlogServer } from "./blog_server";


const BlogInitValue = {}

const defaultState = {
    blogs : BlogInitValue,
    isError : false,
    isLoading : false,
    isSuccess : false,
    errors : {},
    message : ""
}

export const BlogSlice = createSlice({
    name : "blog",
    initialState: defaultState,
    reducers : {},
    extraReducers : (builder => {
        builder.addCase(BlogServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(BlogServer.fulfilled , (state , action) => {
            state.blogs = action.payload.data
            state.isLoading = false
            state.isSuccess = true
            state.errors = {}
        }).addCase(BlogServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.message
            }

        })
    })
})

export const BlogReducer = BlogSlice.reducer
