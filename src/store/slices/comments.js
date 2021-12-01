import { createSlice, createSelector } from "@reduxjs/toolkit";

export const name = "comments";
const initialState = {
  comments: [], 
};

const commentsSlice = createSlice({
    name,
    initialState,
    reducers: {
        initComments(state, {payload}){            
            state.comments = payload;
        },
        addComment(state, {payload}){
            payload.id = state.comments[0].id+1;
            state.comments.unshift(payload);
        }
    },
});

const getSlice = (state) => state[name] || {};

export const getComments = createSelector(
    getSlice,
    (slice) => slice.comments
);

export const { initComments, addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
