//! Redux Toolkit 
import { configureStore } from "@reduxjs/toolkit";

import { productsReducer } from './products/productsSlice';
import { catalogReduser } from './catalog/catalogSlice';




export const store = configureStore({
    reducer: {
        productsAll: productsReducer,
        catalogsAll: catalogReduser,
    },
});


