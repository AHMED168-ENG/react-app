import { createSlice } from "@reduxjs/toolkit";
import { CouponServer } from "./coupon_server";


const couponInitValue = {}

const defaultState = {
    coupons : couponInitValue,
    isError : false,
    isLoading : false,
    isSuccess : false,
    errors : {},
    message : ""
}

export const CouponSlice = createSlice({
    name : "coupon",
    initialState: defaultState,
    reducers : {},
    extraReducers : (builder => {
        builder.addCase(CouponServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(CouponServer.fulfilled , (state , action) => {
            state.coupons = action.payload.data
            state.isLoading = false
            state.isSuccess = true
            state.errors = {}
        }).addCase(CouponServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.message
            }
        })
    })
})

export const CouponReducer = CouponSlice.reducer
