//! Redux Toolkit 
import { configureStore } from "@reduxjs/toolkit";

import { productsReducer } from './products/productsSlice';
import { catalogsReduser } from './catalogs/catalogsSlice';




export const store = configureStore({
    reducer: {
        productsAll: productsReducer,
        catalogsAll: catalogsReduser,
    },
});


