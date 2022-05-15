import './App.css';
import { useContext, useEffect, useState } from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './components/home';
import Register from './components/Auth/register';
import Login from './components/Auth/login';
import cartCtx from './components/context';
import CartList from './components/Cart/CartList';
import AdminLogin from "./components/Admin/adminLogin";
import GetProducts from './components/Admin/getProduct';

function App() {
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem("token");

  const updateCart = async ({ item, type }) => {
    console.log(item)
    const { company, img, model, _id, price } = item;
    const {data} = await axios.put(`https://ecomm-app-backend-demo.herokuapp.com/users/carts/update?type=${type}`, { company, img, model, _id, price }, { headers: {"Authorization" : `Bearer ${token}`} })
    setCart(data);
  }

  const currencyFormatter = (number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(number);

  return (
    <div className="App">
      <cartCtx.Provider value={[cart, updateCart, currencyFormatter, setCart]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/carts' element={<CartList />} />
          <Route path='/admin/getproducts' element={<GetProducts />} />
          <Route path='/admin/login' element={<AdminLogin />} />
        </Routes>
      </cartCtx.Provider>
    </div>
  );
}

export default App;
