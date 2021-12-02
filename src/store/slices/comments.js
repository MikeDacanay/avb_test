import { createSlice, createSelector } from "@reduxjs/toolkit";

export const name = "comments";
const initialState = {
  comments: [], 
  commentStats: {},
};

const commentsSlice = createSlice({
    name,
    initialState,
    reducers: {
        initComments(state, {payload}){            
            state.comments = payload;
            const commentsPerName = payload.reduce((acc, {name}) => {
                if(!acc[name]){
                    acc[name] = 0;
                }

                acc[name]++;
                return acc;
            }, {});      

            state.commentStats = commentsPerName;
        },
        addComment(state, {payload}){
            payload.id = state.comments[0].id+1;
            state.comments.unshift(payload);
            if(!state.commentStats[payload.name]){
                state.commentStats[payload.name] = 0;
            }
            state.commentStats[payload.name]++;
        },
    },
});

const getSlice = (state) => state[name] || {};

export const getComments = createSelector(
    getSlice,
    ({comments}) => comments
);

export const getTopCommentors = createSelector(
    getSlice,
    ({commentStats}) =>  {
        return Object.entries(commentStats).sort((a, b) => b[1] - a[1]).slice(0, 3);
    }
)

export const { initComments, addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
