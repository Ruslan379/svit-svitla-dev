import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';





//! axios defaults baseURL
axios.defaults.baseURL = 'http://localhost:3333/api'; //! local backend
// axios.defaults.baseURL = 'https://??????????.onrender.com/api'; //! remote backend

//*  Already working!!!
//! GET @ /products
export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async (_, thunkAPI) => {
        try {
            const { data: { products } } = await axios.get('/products');
            // const { data } = await axios.get('/products');
            // console.log("products/getAllProducts == >data:", data); //!
            // console.log("products/getAllProducts ==> data.order:", data.order); //!
            // const { products } = data;
            console.log("products/getAllProducts ==> products:", products); //!
            // return data;
            // return data.products;
            return products;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 404" ? "Нет такой коллекции пользователей" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//*  Already working!!!
//! POST @ /products
export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (productOne, thunkAPI) => {
        try {
            console.log("products/addProduct ==> productOne:", productOne); //!
            const { data: { product } } = await axios.post('/products', productOne);
            console.log("products/addProduct ==> product:", product); //!
            return product;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 400" ? "Ошибка при создании контакта" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//! -------------- Plugs -----------------
//? Working, but disabled for now!!!
//? Used as plug and replacement addAllProducts
//! GET @ /product
export const getAllProducts1 = createAsyncThunk(
    'products/getAllProducts',
    async (AllProducts) => {
        return AllProducts
    }
);

//? Working, but disabled for now!!!
//? Used as GET and replacement addProduct
//! POST @ /product
export const addProduct1 = createAsyncThunk(
    'products/addProduct',
    async (productOne) => {
        return productOne
    }
);

