import { createSlice, createSelector } from "@reduxjs/toolkit";

export const name = "comments";
const initialState = {
  comments: [], 
};

const commentsSlice = createSlice({
    name,
    initialState,
    reducers: {
        initComments(state, action){
            state.comments = action.payload;
        },
    },
});

const getSlice = (state) => state[name] || {};

export const getComments = createSelector(
    getSlice,
    (slice) => slice.comments
);

export const { initComments } = commentsSlice.actions;
export default commentsSlice.reducer;
