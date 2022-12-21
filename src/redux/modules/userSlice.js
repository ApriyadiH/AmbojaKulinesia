import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    username: '',
    email: '',
    isAdmin: '',
    isLoading: false,
    error: null   
};

export const userLogin = createAsyncThunk(
    'login',
    async ( { email, password }, thunkAPI ) => {
        try {
            console.log("email", email, "password", password)
            const response = await axios.post(
                "https://ambojakulinesiaserver.vercel.app/api/login",
                // "http://localhost:8000/api/login",
                {
                    email: email,
                    password: password
                }
            );
            localStorage.setItem('user', JSON.stringify(response.data.data));
            // return thunkAPI.fulfillWithValue(response);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        [userLogin.pending]: (state) => {
            state.isLoading = true;
        },
        [userLogin.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.username = action.payload.data.data.username;
            state.email = action.payload.data.data.email;
            state.isAdmin = action.payload.data.data.isAdmin;
            state.isLoading = false;
            state.error = null;
        },
        [userLogin.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
    extraReducers: {}
});

export default userSlice.reducer;