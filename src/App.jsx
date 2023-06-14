// import { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import reactLogo from './assets/react.svg' //? ViteStart
// import viteLogo from '/vite.svg' //? ViteStart

import {ViteStart} from './components/ViteStart/ViteStart'

import { ProductForm } from './components/ProductForm/ProductForm'

import {getAllProducts} from './redux/products/productsOperations'

import './App.css'

export function App() {
  const dispatch = useDispatch();

  const productListLocalStorage = JSON.parse(localStorage.getItem("productList")) || [];
  console.log("App-->productListLocalStorage:", productListLocalStorage); //!

  dispatch(getAllProducts(productListLocalStorage));
  // useEffect(() => {
  //       dispatch(addAllProducts(productListLocalStorage));
  //   }, [dispatch]);


  return (
    <>
      {/* //! ViteStart */}
      <ViteStart />

      <ProductForm />
    </>
  )
}

// export default App
