import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Home from './pages/Home'
import Product from './pages/Product'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Register from './pages/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Product/>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element = {<ContactPage/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Provider>
  </BrowserRouter>
);