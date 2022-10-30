import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
// import { getCookie } from "../../cookie/cookie";

// const params = {
//   key: process.env.REACT_APP_MOVIE,
// };
// const headers = {
//   'Content-Type' : 'application/json',
//   'Access_Token' : getCookie('Access_Token')
// }
// 현진
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
    
    // 토빈님   ---------------------------------------------------------------------------------------------------------
   export const __listAllget = createAsyncThunk(
    "mainlist/listAllget",
    async (payload, thunkAPI) => {
       try {
           const data = await axios.get("http://localhost:3001/poststobin")
           console.log('안녕',data)
           return thunkAPI.fulfillWithValue(data.data)
      } catch (error) {
         return thunkAPI.rejectWithValue(error)
      }
   }
   )
    
  const addPageSlice = createSlice({
    name: "mainlist",
    initialState:{
    instas: [],
    instaGet : [],
    isLoading : false,
    error : null
    },
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
       [__listAllget.pending]: (state) => {
            state.isLoading = true; 
        },
        [__listAllget.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.instaGet = action.payload; 
        },
        [__listAllget.rejected]: (state, action) => {
            state.isLoading = false; 
            state.isSuccess = false;
            state.error = action.payload; 
        },
    }})
    
export const {} = addPageSlice.actions;
export default addPageSlice.reducer;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
//slice =>변수명
//export const {  } = AddPageSlice.actions;
//export default AddPageSlice.reducer;


















