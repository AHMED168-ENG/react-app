import { createSlice } from "@reduxjs/toolkit";
import { EnquiryServer } from "./enquiry_server";


const enquiryInitValue = {}

const defaultState = {
    enquiries : enquiryInitValue,
    isError : false,
    isLoading : false,
    isSuccess : false,
    errors : {},
    message : ""
}

export const EnquirySlice = createSlice({
    name : "enquiry",
    initialState: defaultState,
    reducers : {},
    extraReducers : (builder => {
        builder.addCase(EnquiryServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(EnquiryServer.fulfilled , (state , action) => {
            state.enquiries = action.payload.data
            state.isLoading = false
            state.isSuccess = true
            state.errors = {}
        }).addCase(EnquiryServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.message
            }

        })
    })
})

export const EnquiryReducer = EnquirySlice.reducer
