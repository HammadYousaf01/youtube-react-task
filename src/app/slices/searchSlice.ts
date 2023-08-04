import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },

    clearQuery: (state) => {
      state.query = "";
    },
  },
});

export const { updateQuery, clearQuery } = searchSlice.actions;
export default searchSlice.reducer;
