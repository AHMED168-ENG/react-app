import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const UserAllServer = createAsyncThunk("user/all" , async (arg , payload) => {
    const {rejectWithValue} = payload
    return await axios.get(`${process.env.REACT_APP_SERVER_URL}/user?page=${arg.page}&limit=${arg.limit}&${arg.search ?  arg.search : ""}`).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})


export const UserCreateServer = createAsyncThunk("user/create" , async (arg , payload) => {
    arg = {...arg , width : 500 , height : 500}
    if(arg.image.length) arg.image = arg.image[0].originFileObj
    const {rejectWithValue} = payload
    return await axios.post(`${process.env.REACT_APP_SERVER_URL}/user` , arg , {
        headers : {
            'Content-Type': 'multipart/form-data'
          }
    }).then(async(user) => {
        return user
    }).catch(err => {
        console.log(err)
        return rejectWithValue(err)
    }) 
  
})

export const UserGetOneServer = createAsyncThunk("user/id" , async (id , payload) => {
    const {rejectWithValue} = payload
    return await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/${id}`).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

export const UserUpdateOneServer = createAsyncThunk("user/update/id" , async (arg , payload) => {
    const {rejectWithValue} = payload
    return await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/${arg.id}` , arg.body).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

export const UserActivationServer = createAsyncThunk("user/update/activation" , async (id , payload) => {
    const {rejectWithValue} = payload
    return await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/activation-user/${id}`).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

export const UserDeleteServer = createAsyncThunk("user/delete/id" , async (id , payload) => {
    const {rejectWithValue} = payload
    return await axios.delete(`${process.env.REACT_APP_SERVER_URL}/user/${id}`).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

export const UserBlockingServer = createAsyncThunk("user/update/block" , async (id , payload) => {
    const {rejectWithValue} = payload
    return await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/blocked-user/${id}`).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

export const UserUploadImageServer = createAsyncThunk("user/upload/image" , async (arg , payload) => {
    const {rejectWithValue} = payload
    return await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/upload-image/${arg.id}` , {image : arg.image[0].originFileObj, width : 500 , height : 500} , {
        headers : {
            'Content-Type': 'multipart/form-data'
          }
    }).then((res) => {
        return res   
    }).catch(err => {
        return rejectWithValue(err)
    })  
})

