import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';





//! axios defaults baseURL
axios.defaults.baseURL = 'http://localhost:3333/api'; //! local backend
// axios.defaults.baseURL = 'https://???????????.onrender.com/api'; //! remote backend





//! GET @ /catalogs
export const getAllCatalogs = createAsyncThunk(
    'catalogs/getAllCatalogs',
    async (_, thunkAPI) => {
        try {
            // const { data } = await axios.get('/catalogs');
            // console.log("catalogs/getAllCatalogs==>data:", data); //!
            const { data: { catalogs } } = await axios.get('/catalogs');
            // const { catalogs } = data;
            // console.log("catalogs/getAllCatalogs == >data.catalogs:", data.catalogs); //!
            // return data.catalogs; 
            return catalogs;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 404" ? "Нет такой коллекции пользователей" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//! -------------- Plugs -----------------
//? togleIsOneShop @ /markets
// export const togleIsOneShop = createAsyncThunk(
//     'markets/togleIsOneShop',
//     async () => {
//         return null
//     }
// );

//? togleIsOneShop @ /markets
// export const setShopIndexSelection = createAsyncThunk(
//     'markets/setShopIndexSelection',
//     async (shopIndex) => {
//         return shopIndex
//     }
// );