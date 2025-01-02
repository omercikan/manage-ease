import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./dataSlice";
import { modalSlice } from "./modalSlice";

export const GlobalStore = configureStore({
  reducer: {
    data: dataSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof GlobalStore.getState>;
export type AppDispatch = typeof GlobalStore.dispatch;
