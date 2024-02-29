import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setToken } from "../../../utility/setTokeninHeader";




export const AuthLogin = createAsyncThunk("auth/login" , async (arg , payload) => {
    const {rejectWithValue} = payload
    return await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login` , arg).then((res) => {
        window.localStorage.setItem("token" , res.data.token)
        window.localStorage.setItem("user" , JSON.stringify(res.data.user))
        setToken(res.data.token)
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})