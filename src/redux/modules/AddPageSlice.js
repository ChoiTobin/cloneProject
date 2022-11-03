import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../cookie/Cookie";
const params = {
  key: process.env.REACT_APP_MOVIE,
};
const headers = {
  'Content-Type' : 'application/json',
  'Access_Token' : getCookie('Access_Token')
}

const initialState = {
    instas: [],
    isLoading: false,
    error: null,
  } 

  export const __addinstas = createAsyncThunk(
  "instas/addinstas",
  async (payload, thunkAPI) => {
  const Authorization =  (getCookie('Access_Token'))
  const RefreshToken= (getCookie('refreshToken'))
  try {
  const data = await axios.post(`https://wepungsan.kro.kr/api/article`,payload,
  {
  headers:{ 
            enctype:"multipart/form-data",
            Authorization:`Bearer ${Authorization}`,
            RefreshToken:RefreshToken,
            "cache-control":"no-cache",
  }
  })
  window.location.replace('/mainpage')
  return thunkAPI.fulfillWithValue(data.data);
  }catch (error) {
  return thunkAPI.rejectWithValue(error);
  }});




  
  export const __getinstas = createAsyncThunk(
  "instas/getinstas",
  async (payload, thunkAPI) => {
  try {
    
  const Authorization =  (getCookie('Access_Token'))
  const RefreshToken= (getCookie('refreshToken'))
  // console.log(Authorization,RefreshToken)
  const data = await axios.get("https://wepungsan.kro.kr/api/articles",
  {
  // const data = await axios.get("http://localhost:3001/posts",{
  headers:{
            enctype:"multipart/form-data",
            Authorization:`Bearer ${Authorization}`,
            RefreshToken:RefreshToken,
            "cache-control":"no-cache",
  }
  })
  return thunkAPI.fulfillWithValue(data.data)
  } catch (error) {
  return thunkAPI.rejectWithValue(error)
  }})
   

  // 삭제
   export const __deleteinsta = createAsyncThunk(
  "instas/deleteinsta",
  async (payload, thunkAPI) => {
  try {
  const Authorization =  (getCookie('Access_Token'))
  const RefreshToken= (getCookie('refreshToken'))
  const data = await axios.delete(`https://wepungsan.kro.kr/api/article/${payload.id}`,{
    // const data = await axios.delete(`http://localhost:3001/posts/${payload.id}`,{
  headers:{
            enctype:"multipart/form-data",
            Authorization:`Bearer ${Authorization}`,
            RefreshToken:RefreshToken,
            "cache-control":"no-cache",
  }

})
  window.location.replace('/mainpage')

  return thunkAPI.fulfillWithValue(data)
  }catch (error) {
    // window.location.replace('/')
  return thunkAPI.rejectWithValue(error)
  }
  }
  )

//    .then((response) => {
//     if (response.data.success) {
//         //삭제 성공
//         return thunkAPI.fulfillWithValue(payload);
//     }
// })
// } catch (error) {
// return thunkAPI.rejectWithValue(error);
// }
// }
// );


// 수정 
  export const __editinstas = createAsyncThunk(
    "instas/editinstas",
    async (payload, thunkAPI) => {
    try {
    const Authorization =  (getCookie('Access_Token'))
    const RefreshToken= (getCookie('refreshToken'))
    //put데이터에 payload.content가 백단으로 잘가는지 확인해야함.
    const data = await axios.put(`https://wepungsan.kro.kr/api/article/${payload.id}`,payload.content,
    // const data = await axios.post(`https://wepungsan.kro.kr/api/article`,payload
    {
    // const data = await axios.patch("  http://localhost:3001/posts",{
    headers:{
            // enctype:"multipart/form-data",
            'Content-Type' : 'application/json',
            Authorization:`Bearer ${Authorization}`,
            RefreshToken:RefreshToken,
            "cache-control":"no-cache",
            }         
    }) 
    // .then((response) => {
          //삭제 성공
     
          window.location.reload()
          return thunkAPI.fulfillWithValue(data)
  
    
    } catch (error) {
    return thunkAPI.rejectWithValue(error)
    }})
    


  // 리듀서

  const AddPageSlice = createSlice({
    name: "mainlist",
    initialState,
    extraReducers: {
      // 생성
      [__addinstas.pending]: (state) => {
        state.isLoading = true;
      },
      [__addinstas.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.instas= action.payload
      },
      [__addinstas.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
      //추가
      [__getinstas.pending]: (state) => {
        // console.log("ddd",state)
            state.isLoading = true;
      },
      [__getinstas.fulfilled]: (state, action) => {
            state.isLoading = false;
            // state.isSuccess = false;
            state.instas = action.payload;
      },
      [__getinstas.rejected]: (state, action) => {
            state.isLoading = false;
            // state.isSuccess = false;
            state.error = action.payload;
      },
      [__deleteinsta.pending]: (state) => {
            state.isLoading = true;
      },
      [__deleteinsta.fulfilled]: (state, action) => {
            state.isLoading = false;
            // state.isSuccess = false;
            //console.log("퇴근좀시켜줘..",state,action.payload)
            //이거 왜지워지지?.. action.payload , action.payload.data
            state.instas = state.instas.filter((item) => item.id !== action.payload); 
      },
      [__deleteinsta.rejected]: (state, action) => {
            state.isLoading = false;
            // state.isSuccess = false;
            state.error = action.payload;
      },

      // 수정
      [__editinstas.pending]: (state) => {
        state.isLoading = true; 
      },
      [__editinstas.fulfilled]: (state, action) => {
        state.isLoading = false; 
        state.instas = action.payload;
      },
        
      [__editinstas.rejected]: (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; 
      },

}})

export const {} = AddPageSlice.actions;
export default AddPageSlice.reducer;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
//slice =>변수명
//export const {  } = AddPageSlice.actions;
//export default AddPageSlice.reducer;