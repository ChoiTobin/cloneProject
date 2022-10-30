import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
// import { getCookie } from "../../cookie/cookie";


// initial State
const initialState = {
  instas: [],
  isLoading: false,
  error: null,
  }
  // const params = {
  //   key: process.env.REACT_APP_MOVIE,
  // };
  // const headers = {
  //   'Content-Type' : 'application/json',
  //   'Access_Token' : getCookie('Access_Token')
  // }

  export const __addinstas = createAsyncThunk(
    "instas/addinstas",
    async (payload, thunkAPI) => {
      
    try {
    // const data = await axios.post(SERVICE_URL, payload, {headers : headers});
    const data = await axios.post("http://localhost:3001/posts",payload);
    // return thunkAPI.fulfillWithValue(data.data.data);
    console.log("payload",data)
    return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
    }
    );
    
  const addPageSlice = createSlice({
    name: "mainlist",
    initialState,
    extraReducers: {
      // 추가
      [__addinstas.pending]: (state) => {
        state.isLoading = true;
      },
      [__addinstas.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.instas.push(action.payload)
      },
      [__addinstas.rejected]: (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; 
      }, 
    }})
    
export const {} = addPageSlice.actions;
export default addPageSlice.reducer;
