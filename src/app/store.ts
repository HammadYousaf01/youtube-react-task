import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "api/apiSlice";
import searchReducer from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
