import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { getCookie ,setCookie, delCookie } from "../cookie/Cookie";

const initialState = {
  account : [],
  isLoading : false,
  error : null
};

// const params = {
//   key: process.env.REACT_APP_ACCOUNT,
// };
// const SERVICE_URL = params.key

// const headers = {
//   'Content-Type' : 'application/json',
//  // 'Access_Token' : getCookie('Access_Token')
// }


// export const  __checkId = createAsyncThunk(
//   "account/checkId",
//   // type
//   async (payload, thunkAPI) => {
//     try {
//     const data = await axios.post(`${SERVICE_URL}/checkid`, {userid: payload})
//       return thunkAPI.fulfillWithValue(data.data)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

// export const  __checkName = createAsyncThunk(
//   "account/checkName",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.post(`${SERVICE_URL}/checkname`, {nickname: payload})
//       // 415는 타입에러. {}로 감싸서 보낸다.
//       return thunkAPI.fulfillWithValue(data.data)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

export const __userSignUp = createAsyncThunk(
  "account/userSignUp",
  async (payload, thunkAPI) => {
      try {
          const data = await axios.post("https://www.dwon5001.kro.kr/auth/signup",payload)
          // .then((response) =>{
          //   console.log(response)
          // })
          return thunkAPI.fulfillWithValue(data.data)
      } catch (error) {
          return thunkAPI.rejectWithValue(error)
      }
  }
)
//회원가입




export const LoginSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: {

    // [__checkId.pending]: (state) => {
    //   state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    // },
    // [__checkId.fulfilled]: (state, action) => {
    //   state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.isSuccess = false;
    //   state.idCheck=action.payload;
    // },
    // [__checkId.rejected]: (state, action) => {
    //   state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.isSuccess = false;
    //   state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    // },
    // [__checkName.pending]: (state) => {
    //   state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    // },
    // [__checkName.fulfilled]: (state, action) => {
    //   state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.isSuccess = false;
    //   state.nameCheck=action.payload;
    // },
    // [__checkName.rejected]: (state, action) => {
    //   state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.isSuccess = false;
    //   state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    // },
    [__userSignUp.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__userSignUp.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.account=action.payload; //
    },
    [__userSignUp.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  }
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { userLogin, userSignUp, userSignUpGet } = LoginSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default LoginSlice.reducer;