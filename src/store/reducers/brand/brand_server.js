import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const BrandServer = createAsyncThunk("brand/all" , async (arg , payload) => {
    const {rejectWithValue} = payload
    return await axios.get(`${process.env.REACT_APP_SERVER_URL}/brand?page=${arg.page}&limit=${arg.limit}`).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})