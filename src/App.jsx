import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Products from './pages/Products';
import Buyer from './pages/buy&seller/Buyer';
import Seller from './pages/buy&seller/Seller';
import ProductView from './pages/ProductView';
import Login from './pages/Login';
import RegisterForm from './pages/RegisterForm';
import AddToCart from './pages/AddToCart';
import CardPayment from './pages/pageComponents/payments/CardPayment';
import Condition from './pages/Condition';
import CustomerService from './pages/CustomerService';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/buyer" element={<Buyer/> } />
          <Route path="/seller" element={<Seller/> } />
          <Route path='/:id/product_view' element={<ProductView />} />
          <Route path='/login' element={<Login/>}  />
          <Route path='/register/form' element={<RegisterForm/>}  />
          <Route path='/add_to_cart' element={<AddToCart/>} />
          <Route path='/payments/cards' element={<CardPayment/>} />
          <Route path='/conditions' element={<Condition/>} />
          <Route path='/contact' element={<CustomerService/>} />
        </Routes>
    </Router>
  )
}

export default App
