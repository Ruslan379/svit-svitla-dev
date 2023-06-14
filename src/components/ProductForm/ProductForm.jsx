import React, { useState } from "react";
import {
  useDispatch, 
  useSelector
} from 'react-redux'; 

import { getAllProducts, addProduct } from '../../redux/products/productsOperations';
import { selectProducts, selectLoading } from '../../redux/products/productsSelectors';

import css from './ProductForm.module.css';

export const ProductForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  console.log("isLoading:", isLoading); //!

  const products = useSelector(selectProducts);
  console.log("products:", products); //!

  let productsFromLocalStorage = JSON.parse(localStorage.getItem("productList")) || [];
  console.log("productsFromLocalStorage:", productsFromLocalStorage); //!

  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [price, setPrice] = useState("");
  const [manufacturerCountry, setManufacturerCountry] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [productImages, setProductImages] = useState([]);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductCodeChange = (event) => {
    setProductCode(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleManufacturerCountryChange = (event) => {
    setManufacturerCountry(event.target.value);
  };

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImage(file);
  };

  const handleProductImagesChange = (event) => {
    const files = event.target.files;
    setProductImages(Array.from(files));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    //! Добавьте здесь логику для обработки отправки формы
    //! Например, можно отправить данные на сервер или выполнить другие действия
        const productItem = {
      productName,
      productCode,
      price,
      manufacturerCountry,
      // coverImage,
      // productImages,
    };
    productsFromLocalStorage.push(productItem);
    //! Write an array (list) of products in Local Storage or send to the server:
    localStorage.setItem("productList", JSON.stringify(productsFromLocalStorage));
    await dispatch(addProduct(productItem)); //! send to the server:
    await dispatch(getAllProducts()); //! get from server:
    
    //! Сбросить значения полей формы после отправки
    setProductName("");
    setProductCode("");
    setPrice("");
    setManufacturerCountry("");
    setCoverImage(null);
    setProductImages([]);
  };

  // console.log("productName:", productName); //!
  // console.log("productCode:", productCode); //!
  // console.log("price:", price); //!
  // console.log("manufacturerCountry:", manufacturerCountry); //!
  // console.log("coverImage:", coverImage); //!
  // console.log("productImages:", productImages); //!


  return (
    <div>
      <form
        autoComplete="on"
        className={css.formContainer}
        onSubmit={handleSubmit}
      >
      <label className={css.label}>
        Назва товару
          <input
            className={css.input}
            autoComplete="on"
            type="text"
            value={productName}
            onChange={handleProductNameChange}
        />
      </label>
      <label className={css.label}>
        Артикул
          <input
            className={css.input}
            autoComplete="on"
            type="text"
            value={productCode}
            onChange={handleProductCodeChange}
        />
      </label>
      <label className={css.label}>
        Ціна
          <input
            className={css.input}
            autoComplete="on"
            type="text"
            value={price}
            onChange={handlePriceChange}
          />
      </label>
      <label className={css.label}>
        Країна походження
          <input
            className={css.input}
            autoComplete="on"
            type="text"
            value={manufacturerCountry}
            onChange={handleManufacturerCountryChange}
        />
      </label>
      {/* <label className={css.label}>
        Додати обкладинку
          <input
            className={css.input}
            type="file"
            onChange={handleCoverImageChange}
          />
      </label> */}
      {/* <label className={css.label}>
        Додати зображення
          <input
            className={css.input}
            type="file"
            multiple
            onChange={handleProductImagesChange}
          />
      </label> */}
        <button
          className={css.submitButtonForm}
          type="submit"
        >
          Зберегти
        </button>
      </form>
    </div>
    
  );
};

// export default ProductForm;
