import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";






export const __listAllget = createAsyncThunk(
    "mainlist/listAllget",
    async (payload, thunkAPI) => {
        
        try {
            const data = await axios.get("http://localhost:3001/posts")
            console.log('안녕',data)
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)





export const AddPageSlice = createSlice({
    name: "mainlist",
    initialState:{
    instaGet : [],
    isLoading : false,
    error : null
    },
    reducers: {},
    extraReducers: {
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
    }
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {  } = AddPageSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default AddPageSlice.reducer;
//slice =>변수명