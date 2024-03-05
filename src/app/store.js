import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../slices/ThemeSlice";
import ProductsReducer from "../slices/ProductsSlice";


export const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        products: ProductsReducer
    }
});