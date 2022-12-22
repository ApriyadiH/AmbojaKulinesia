import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    username: '',
    email: '',
    isAdmin: '',
    isLoading: false,
    errorMessage: null,
    isLoggedIn: false
};

export const userLogin = createAsyncThunk(
    'login',
    async ({ email, password }, thunkAPI) => {
        try {
            const { data } = await axios.post(
                "https://ambojakulinesiaserver.vercel.app/login",
                // "http://localhost:8000/api/login",
                {
                    email: email,
                    password: password
                }
            );
            localStorage.setItem('user', JSON.stringify(data.data));
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            const status = error.response.status;
            let message = null;
            if (status === 400) {
                message = error.response.data.message
            } else {
                message = 'Cannot access the server.'
            }
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.username = '';
            state.email = '';
            state.isAdmin = '';
            state.isLoggedIn = false;
        },
        stillLogin: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.isAdmin = action.payload.isAdmin;
            state.isLoggedIn = true;
        }
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.isLoading = true;
            state.errorMessage = null;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.isAdmin = action.payload.isAdmin;
            state.isLoading = false;
            state.errorMessage = null;
            state.isLoggedIn = true;
        },
        [userLogin.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
            state.isLoggedIn = false;
        }
    }
});

export const { logout, stillLogin } = userSlice.actions;
export default userSlice.reducer;