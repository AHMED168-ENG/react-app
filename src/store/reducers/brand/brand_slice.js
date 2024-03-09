import { createSlice } from "@reduxjs/toolkit";
import { BrandActivationServer, BrandAllServer, BrandCreateServer, BrandDeleteServer, BrandGetOneServer, BrandUpdateOneServer } from "./brand_server";


const BrandInitValue = {}

const defaultState = {
    brands : BrandInitValue,
    isError : false,
    isLoading : false,
    isSuccess : false,
    updated : false,
    created : false,
    activation : false,
    deleted : false,
    errors : {},
    brand : {},
    message : ""
}

export const BrandSlice = createSlice({
    name : "brand",
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
            state.updated = false
            state.created = false
            state.activation = false
            state.deleted = false
            state.errors = {}
            state.message = ""
        }
    },
    extraReducers : (builder => {
        builder.addCase(BrandAllServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(BrandAllServer.fulfilled , (state , action) => {
            state.brands = action.payload.data
            state.isLoading = false
            state.isSuccess = true
            state.errors = {}
        }).addCase(BrandAllServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.message
            }
        })

        builder.addCase(BrandCreateServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(BrandCreateServer.fulfilled , (state , action) => {
            state.created = true
            state.message = "brand created successful !"            
        }).addCase(BrandCreateServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })

        builder.addCase(BrandGetOneServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(BrandGetOneServer.fulfilled , (state , action) => {
            console.log("action.payload.data")
            console.log(action.payload.data)
            state.brand = action.payload.data
            
        }).addCase(BrandGetOneServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })

        builder.addCase(BrandUpdateOneServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(BrandUpdateOneServer.fulfilled , (state , action) => {
            state.updated = true
            state.message = "brand updated successful !"            
        }).addCase(BrandUpdateOneServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })

        builder.addCase(BrandActivationServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(BrandActivationServer.fulfilled , (state , action) => {
            state.activation = true
            state.message = `${action.payload.data.active ? "active" : "dis active" } brand successful`
        }).addCase(BrandActivationServer.rejected , (state , action) => {
            if(action.payload.response.status === 400) {
                state.errors = action.payload.response.data.errors
            } else {
                state.isError = true
                state.message = action.payload.response.data.message
                state.errors = {}
            }
            state.isLoading = false
        })


        builder.addCase(BrandDeleteServer.pending , (state , action) => {
            state.isLoading = true
        }).addCase(BrandDeleteServer.fulfilled , (state , action) => {
            state.deleted = true
            state.message = `brand delete successful`
        }).addCase(BrandDeleteServer.rejected , (state , action) => {
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

export const BrandReducer = BrandSlice.reducer
export const {setUser , emptyUser , reset} = BrandSlice.actions
