import { createSlice } from "@reduxjs/toolkit";
import { OrderServer } from "./order_server";


const orderInitValue = {}

const defaultState = {
    orders : orderInitValue,
    isError : false,
    isLoading : false,
    isSuccess : false,
    errors : {},
    message : ""
}

export const OrderSlice = createSlice({
    name : "order",
    initialState: defaultState,
    reducers : {},
    extraReducers : (builder => {
        builder.addCase(OrderServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(OrderServer.fulfilled , (state , action) => {
            state.orders = action.payload.data
            state.isLoading = false
            state.isSuccess = true
            state.errors = {}
        }).addCase(OrderServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.message
            }

        })
    })
})

export const OrderReducer = OrderSlice.reducer
