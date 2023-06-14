import { createSlice } from '@reduxjs/toolkit';
import {
    getAllProducts,
    addProduct
} from './productsOperations';


const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [getAllProducts.pending]: handlePending,
        [addProduct.pending]: handlePending,

        [getAllProducts.rejected]: handleRejected,
        [addProduct.rejected]: handleRejected,

        [getAllProducts.fulfilled](state, { payload }) {
            state.orders = payload;
            state.isLoading = false;
            state.error = null;
        },

        [addProduct.fulfilled](state, { payload }) {
            console.log("productsSlice/addProduct ==> payload:", payload); //!
            state.products.push(payload);
            state.isLoading = false;
            state.error = null;

        },
    },
});

export const productsReducer = productsSlice.reducer;
