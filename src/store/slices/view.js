import { createSlice, createSelector } from "@reduxjs/toolkit";

export const name = "view";
const initialState = {
  commentsModalOpen: false, 
};

const viewSlice = createSlice({
  name,
  initialState,
  reducers: {
    toggleCommentsModal(state){
      state.commentsModalOpen =  !state.commentsModalOpen;
    },
  },
});

const getSlice = (state) => state[name] || {};

export const getViewCommentsModalOpen = createSelector(
  getSlice,
  (slice) => slice.commentsModalOpen
);

export const { toggleCommentsModal } = viewSlice.actions;
export default viewSlice.reducer;
