import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie ,setCookie, delCookie } from "../cookie/Cookie";
const params = {
  key: process.env.REACT_APP_ACCOUNT,
};

const SERVICE_URL = params.key
const headers = {
  'Content-Type' : 'application/json',
 'Access_Token' : getCookie('Access_Token')
}

export const __userLogin = createAsyncThunk(
  "account/userLogin",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`https://wepungsan.kro.kr/auth/login`,payload)

      let huyunjin = data.request.status
      const Access_Token = data.data.accessToken;
      const refreshToken = data.data.refreshToken;
      // 정상적으로 로그인이 됐을때 토큰을 받아오겠다.
      if (huyunjin === 200 || huyunjin === 201) {
          setCookie("Access_Token", Access_Token);
        setCookie("refreshToken", refreshToken);
        setCookie("nickname", data.data.nickname);
        alert("로그인 성공");
        window.location.replace("/MainPage")
      }
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      if (400 < error.data.status && error.data.status < 500) {
        //window.location.reload();
        //alert("로그인 실패")
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __userLogout = createAsyncThunk(
  "account/userLogout",
  async(payload, thunkAPI) => {
    try {
      await axios.delete(`https://www.dwon5001.kro.kr/auth/logout`, {headers : headers})
      delCookie("Access_Token")
      delCookie("nickname")
      return thunkAPI.fulfillWithValue(payload)
    }catch(error){
      return thunkAPI.rejectWithValue(error);
    }
  }
)
// 아무아이디나 입력했을때 로그인이 되는 문제는 앞단문제고 여기서 예외처리를 해줘야한다.
//
export const  __idCheck = createAsyncThunk(
  "account/idCheck",
  // type
  async (payload, thunkAPI) => {
    try {
    const data = await axios.post(`https://www.dwon5001.kro.kr/auth/idCheck`, {username:payload})
    .then((response) => {

    })

      return thunkAPI.fulfillWithValue(data.data)
    } catch (error) {

      return thunkAPI.rejectWithValue(error)
    }
  }
)

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
// export const  __userSignUp = createAsyncThunk(
//   "account/userSignUp",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.post(`${SERVICE_URL}/signup`, payload)
//       return thunkAPI.fulfillWithValue(data.data)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )
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
//       const data = await axios.post(`https://www.dwon5001.kro.kr/auth/logout`, {nickname: payload})
//       // 415는 타입에러. {}로 감싸서 보낸다.
//       return thunkAPI.fulfillWithValue(data.data)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )


//아래는 토빈 위는 현진------------------------------------------------------------------

export const __userSignUp = createAsyncThunk(
  "account/userSignUp",
  async (payload, thunkAPI) => {
      try {
        // console.log("뭐가잘못?",payload)
          const data = await axios.post("https://wepungsan.kro.kr/auth/signup",payload)
          window.location.replace("/")
          return thunkAPI.fulfillWithValue(data.data)
      } catch (error) {
        window.location.replace("/")
        return thunkAPI.rejectWithValue(error)
      }
  }
)

//회원가입
export const LoginSlice = createSlice({
  name: "account",
    initialState: {
      account: [],
      isLoading: false,
      error: null,
    },
  reducers: {},
  extraReducers: {
    [__userLogin.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__userLogin.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.account=action.payload; //
    },
    [__userLogin.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__userLogout.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__userLogout.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.account=action.payload; //
    },
    [__userLogout.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    // ------위는 현진 아래는 토빈
    [__idCheck.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__idCheck.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.idCheck=action.payload;
    },
    [__idCheck.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
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