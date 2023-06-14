import { createSlice } from '@reduxjs/toolkit';
import {
    getAllCatalogs,
} from './catalogsOperations';




const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};


const catalogsSlice = createSlice({
    name: 'catalogs',
    initialState: {
        catalogs: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [getAllCatalogs.pending]: handlePending,
        // [togleIsOneShop.pending]: handlePending,
        // [setShopIndexSelection.pending]: handlePending,

        [getAllCatalogs.rejected]: handleRejected,
        // [togleIsOneShop.rejected]: handleRejected,
        // [setShopIndexSelection.rejected]: handleRejected,

        [getAllCatalogs.fulfilled](state, { payload }) {
            // console.log("getAllMarkets.fulfilled --> payload:", payload); //!
            state.catalogs = payload;
            state.isLoading = false;
            state.error = null;
        },
    },
});

export const catalogsReduser = catalogsSlice.reducer;
