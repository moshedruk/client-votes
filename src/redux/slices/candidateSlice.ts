
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { candidateState, DataStatus } from "../../types/redux";


const initdata: candidateState = {
    err: null,
    status: DataStatus.IDLE,
    candidate: [],
}

export const fetchCandidates = createAsyncThunk('candidate/getlist',
    async (_, Thunkapi) => {
        try {
            const response = await fetch(`https://api.example.com/login`);
            if (response.status !== 200) {
                Thunkapi.rejectWithValue("cant get candidate")
            }
            const data = await response.json();
            Thunkapi.fulfillWithValue(data)
            return data;
        } catch (err) {
            Thunkapi.rejectWithValue("cant fetch get candidate");
        }
    }
)

 const candidateSlice = createSlice({
    name: "candidate",
    initialState: initdata,
    reducers: {},
    extraReducers: (
        bilder: ActionReducerMapBuilder<candidateState>) => {
        bilder.addCase(fetchCandidates.pending, (state) => {
            state.status = DataStatus.LOADING;
            state.err = null
            state.candidate = []
        }).addCase(fetchCandidates.fulfilled, (state, action) => {
            state.status = DataStatus.SUCCESS;
            state.err = null
            state.candidate = action.payload
        }).addCase(fetchCandidates.rejected, (state, action) => {
            state.status = DataStatus.FAILED;
            state.err = action.error as string
            state.candidate = []
        })
    }
})

export default candidateSlice