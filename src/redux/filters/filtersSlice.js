import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    ChangeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter  = (state) => state.filter.name;
export const { ChangeFilter } = filterSlice.actions;
export const filterReducer= filterSlice.reducer;