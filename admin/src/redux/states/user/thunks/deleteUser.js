import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteUser = createAsyncThunk("user/deleteUser", async (payload, Thunk) => {
  try {
    let queryParams = ""
    if(payload.id){
      queryParams = "/"+payload.id
    }
    console.log('queryParams',queryParams)
    let response =  (await axios.post("/admin_api/user/delete"+queryParams))?.data;
    console.log("Call Finished",response);
    return response 
   } catch (error) {
    console.log('error====>',error)
    return Thunk.rejectWithValue(error);
  }
});
