import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const BrandAllServer = createAsyncThunk("brand/all" , async (arg , payload) => {
    const {rejectWithValue} = payload
    return await axios.get(`${process.env.REACT_APP_SERVER_URL}/brand?page=${arg.page}&limit=${arg.limit}`).then((res) => {
        console.log(res)
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})


export const BrandCreateServer = createAsyncThunk("brand/create" , async (arg , payload) => {
    const {rejectWithValue} = payload
    return await axios.post(`${process.env.REACT_APP_SERVER_URL}/brand` , arg).then(async(brand) => {
        return brand
    }).catch(err => {
        return rejectWithValue(err)
    }) 
})

export const BrandGetOneServer = createAsyncThunk("brand/id" , async (id , payload) => {
    const {rejectWithValue} = payload
    return await axios.get(`${process.env.REACT_APP_SERVER_URL}/brand/${id}`).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

export const BrandUpdateOneServer = createAsyncThunk("brand/update/id" , async (arg , payload) => {
    const {rejectWithValue} = payload
    return await axios.put(`${process.env.REACT_APP_SERVER_URL}/brand/${arg.id}` , arg.body).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

export const BrandActivationServer = createAsyncThunk("brand/update/activation" , async (id , payload) => {
    const {rejectWithValue} = payload
    return await axios.put(`${process.env.REACT_APP_SERVER_URL}/brand/activate-brand/${id}`).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

export const BrandDeleteServer = createAsyncThunk("brand/delete/id" , async (id , payload) => {
    const {rejectWithValue} = payload
    return await axios.delete(`${process.env.REACT_APP_SERVER_URL}/brand/${id}`).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

