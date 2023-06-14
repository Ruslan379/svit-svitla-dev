import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from "react-redux"; 
import { BrowserRouter } from 'react-router-dom'; //! for routes

import { store } from "./redux/store";
import { App } from './App.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename="/svit-svitla-dev">
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
