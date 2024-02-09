import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import { contentApi } from "./api/api";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [contentApi.reducerPath]: contentApi.reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentApi.middleware),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
