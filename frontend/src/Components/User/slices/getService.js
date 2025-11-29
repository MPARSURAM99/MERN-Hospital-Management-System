import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { home_url } from "../../../../config.js";

 const initialState={
    service:[],
    isLoading:false,
    error:''
}

 export const getservice=createAsyncThunk("getService", async()=>{
    const res=await fetch(`${home_url}/public/service`)
    const data=res.json()
    return data

})
export const getService=createSlice({
    name:'getDoctor',
    initialState,
    extraReducers:{
        [getservice.pending]:(state)=>{
            state.isLoading=true
        },
        [getservice.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.service=action.payload
        },
        [getservice.rejected]:(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        }

    }

})


export default getService.reducer