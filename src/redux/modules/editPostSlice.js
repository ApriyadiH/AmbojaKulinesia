import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postId: '',
    foodName: '',
    region: '',
    imageUrls: [],
    description: '',
    addpostDisplay: 'flex',
    editpostDisplay: 'none',
};

const editpostSlice = createSlice({
    name: 'editPost',
    initialState,
    reducers: {
        editPost: (state, action) => {
            state.postId = action.payload.postId;
            state.foodName = action.payload.foodName;
            state.region = action.payload.region;
            state.imageUrls = action.payload.imageUrls;
            state.description = action.payload.description;
            state.addpostDisplay = 'none';
            state.editpostDisplay = 'flex';
        },
        cancelEdit: (state, action) => {
            state.postId = '';
            state.foodName = '';
            state.region = '';
            state.imageUrls = [];
            state.description = '';
            state.addpostDisplay = 'flex';
            state.editpostDisplay = 'none';
        },
        saveEdit: (state, action) => {
            state.postId = '';
            state.foodName = '';
            state.region = '';
            state.imageUrls = [];
            state.description = '';
            state.addpostDisplay = 'flex';
            state.editpostDisplay = 'none';
        },
        deleteUrl: (state, action) => {
            state.imageUrls = state.imageUrls.filter((url, index) => (index !== action.payload))
        }
    }
});

export const { editPost, cancelEdit, saveEdit, deleteUrl } = editpostSlice.actions;
export default editpostSlice.reducer;