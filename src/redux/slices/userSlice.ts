import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataStatus, userState } from "../../types/redux";


const initdata: userState = {
    err: null,
    status: DataStatus.IDLE,
    user: null,
}

export const fetchlogin = createAsyncThunk('user/login',
    async (userData, Thunkapi) => {
        try {
            const response = await fetch(`https://api.example.com/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (response.status !== 200) {
                Thunkapi.rejectWithValue("cant login")
            }

            const data = await response.json();
            Thunkapi.fulfillWithValue(data)
            return data;
        } catch (err) {
            Thunkapi.rejectWithValue("cant fetch user/login");
        }
    }
)

 const userSlice = createSlice({
    name: "user",
    initialState: initdata,
    reducers: {},
    extraReducers: (
        bilder: ActionReducerMapBuilder<userState>) => {
        bilder.addCase(fetchlogin.pending, (state) => {
            state.status = DataStatus.LOADING;
            state.err = null
            state.user = null
        }).addCase(fetchlogin.fulfilled, (state, action) => {
            state.status = DataStatus.SUCCESS;
            state.err = null
            state.user = action.payload
        }).addCase(fetchlogin.rejected, (state, action) => {
            state.status = DataStatus.FAILED;
            state.err = action.error as string
            state.user = null
        })
    }
})

export default userSlice