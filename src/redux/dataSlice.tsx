import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/type";

type DataState = {
  data: Product[];
  searchedData: Product[];
};

const initialState: DataState = {
  data: JSON.parse(localStorage.getItem("products") || "[]"),
  searchedData: JSON.parse(localStorage.getItem("products") || "[]"),
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    AddProductCase: (state: DataState, action: PayloadAction<Product>) => {
      state.data = [...state.data, action.payload];
      state.searchedData = state.data;
      localStorage.setItem("products", JSON.stringify(state.data));
    },

    RemoveProductCase: (state: DataState, action: PayloadAction<number>) => {
      state.data = state.data.filter(
        (product) => product.id !== action.payload
      );
      state.searchedData = state.data;
      localStorage.setItem("products", JSON.stringify(state.data));
    },

    UpdateProductCase: (state: DataState, action) => {
      state.data = state.data.map((product) =>
        product.id === action.payload.id ? { ...action.payload } : product
      );
      state.searchedData = state.data;
      localStorage.setItem("products", JSON.stringify(state.data));
    },

    SortingProductPrice: (state, action: PayloadAction<string>) => {
      state.searchedData.sort((a, b) =>
        action.payload === "growing"
          ? Number(a.productPrice) - Number(b.productPrice)
          : Number(b.productPrice) - Number(a.productPrice)
      );
    },

    SearchingProduct: (state, action) => {
      state.searchedData = state.data.filter((product) =>
        product.productName
          .trim()
          .toLowerCase()
          .includes(action.payload.trim().toLowerCase())
      );
    },
  },
});

export const {
  AddProductCase,
  RemoveProductCase,
  UpdateProductCase,
  SortingProductPrice,
  SearchingProduct,
} = dataSlice.actions;
