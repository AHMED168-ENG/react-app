import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const EnquiryServer = createAsyncThunk("enq/all" , async (arg , payload) => {
    const {rejectWithValue} = payload
    return await axios.get(`${process.env.REACT_APP_SERVER_URL}/enq?page=${arg.page}&limit=${arg.limit}`).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})