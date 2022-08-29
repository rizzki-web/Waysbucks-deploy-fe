import Home from "./pages/Home";
import {Route, Routes, useNavigate } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/admin/Product";
import AddToping from "./pages/admin/Toping";
import Transaction from "./pages/admin/Income";
import Profile from "./pages/Profile";
import './style/style.css';
import React from 'react';



import { useEffect, useContext } from "react";
import { UserContext } from "./context/UserContext";
function App() {

  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext)
 
  useEffect(() => {
    // pengalihan halaman jika login berhasil maka akan bernilai true dan akan dialihkan ke halaman utama
    const checkAuth = () => {
    if (state.isLogin === false) {
       navigate('/')
    } else if (state.isLogin === true) {
      if (state.status === 'admin') {
        navigate('/transaction')
      }
    }
    
};
checkAuth();
},[state])

  return (
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/myCart' element={<Cart/>}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/productDetail/:id' element={<ProductDetail/>}/>
          <Route path='/addProduct' element={<AddProduct/>}/>
          <Route path='/addToping' element={<AddToping/>}/>
          <Route path='/transaction' element={<Transaction/>}/>
        </Routes>
  );
}

export default App;
