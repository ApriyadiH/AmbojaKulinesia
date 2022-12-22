import { configureStore } from "@reduxjs/toolkit";
import editPost from "../modules/editPostSlice";
import userReducer from "../modules/userSlice";

const store = configureStore({
    reducer: { 
        editPost: editPost,
        user: userReducer
    }
});

export default store;