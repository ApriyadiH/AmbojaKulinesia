import { configureStore } from "@reduxjs/toolkit";
import editPost from "../modules/editPostSlice";

const store = configureStore({
    reducer: { editPost: editPost }
});

export default store;