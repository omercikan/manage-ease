import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modalSlice",
    initialState: {
        isOpenModal: false,
    }, 
    reducers: {
        changeModalCase: (state) => {
            state.isOpenModal = !state.isOpenModal
        }
    }
});

export const { changeModalCase } = modalSlice.actions;