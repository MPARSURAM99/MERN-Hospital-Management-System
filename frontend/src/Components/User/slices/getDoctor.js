import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { home_url } from "../../../../config.js";

 const initialState={
    doctor:[],
    isLoading:false,
    error:''
}

 export const getdoctor=createAsyncThunk("getdoctor", async()=>{
    const res=await fetch(`${home_url}/public/doctor`)
    const data=res.json()
    return data

})
export const getDoctor=createSlice({
    name:'getDoctor',
    initialState,
    extraReducers:{
        [getdoctor.pending]:(state)=>{
            state.isLoading=true
        },
        [getdoctor.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.doctor=action.payload
        },
        [getdoctor.rejected]:(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        }

    }

})


export default getDoctor.reducer