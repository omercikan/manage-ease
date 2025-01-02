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
      state.searchedData = [...state.data, action.payload];
      localStorage.setItem("products", JSON.stringify(state.searchedData));
    },

    RemoveProductCase: (state: DataState, action: PayloadAction<number>) => {
      state.searchedData = state.data.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("products", JSON.stringify(state.searchedData));
    },

    UpdateProductCase: (state: DataState, action) => {
      state.searchedData = state.data.map((product) =>
        product.id === action.payload.id ? { ...action.payload } : product
      );
      localStorage.setItem("products", JSON.stringify(state.searchedData));
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
