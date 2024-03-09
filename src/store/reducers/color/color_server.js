import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const ColorAllServer = createAsyncThunk("color/all" , async (arg , payload) => {
    const {rejectWithValue} = payload
    return await axios.get(`${process.env.REACT_APP_SERVER_URL}/color?page=${arg.page}&limit=${arg.limit}&${arg.search ?  arg.search : ""}`).then((res) => {
        console.log(res)
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

export const ColorCreateServer = createAsyncThunk("color/create" , async (arg , payload) => {
    const {rejectWithValue} = payload
    return await axios.post(`${process.env.REACT_APP_SERVER_URL}/color` , arg).then(async(color) => {
        return color
    }).catch(err => {
        return rejectWithValue(err)
    }) 
})

export const ColorGetOneServer = createAsyncThunk("color/id" , async (id , payload) => {
    const {rejectWithValue} = payload
    return await axios.get(`${process.env.REACT_APP_SERVER_URL}/color/${id}`).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

export const ColorUpdateOneServer = createAsyncThunk("color/update/id" , async (arg , payload) => {
    const {rejectWithValue} = payload
    return await axios.put(`${process.env.REACT_APP_SERVER_URL}/color/${arg.id}` , arg.body).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

export const ColorActivationServer = createAsyncThunk("color/update/activation" , async (id , payload) => {
    const {rejectWithValue} = payload
    return await axios.put(`${process.env.REACT_APP_SERVER_URL}/color/activation-color/${id}`).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

export const ColorDeleteServer = createAsyncThunk("color/delete/id" , async (id , payload) => {
    const {rejectWithValue} = payload
    return await axios.delete(`${process.env.REACT_APP_SERVER_URL}/color/${id}`).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

