import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import TopPage from './components/views/ProductPage/TopPage';
import ProductDetailPage from './components/views/ProductPage/ProductDetailPage';
import CartPage from './components/views/CartPage/CartPage'
import BuyPage from './components/views/BuyPage/BuyPage'
import OrderCompletePage from './components/views/BuyPage/OrderCompletePage';
import JoinPage from './components/views/JoinPage/JoinPage'
import AdminPage from './components/views/AdminPage/AdminPage';
import MyPage from './components/views/MyPage/MyPage'
import EditPage from './components/views/EditPage/EditPage';
import OrderTrackingPage from './components/views/MyPage/OrderTrackingPage';
import ProductEditPage from './components/views/EditPage/ProductEditPage';
import ProductPostPage from './components/views/PostPage/ProductPostPage';
import DeleteOrderPage from './components/views/MyPage/DeleteOrderPage';
import ProductGetPage from './components/views/PostPage/ProductGetPage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element = {<LandingPage />} />
          <Route exact path="/register" element = {<RegisterPage />} />
          <Route exact path="/login" element = {<LoginPage />} />
          <Route exact path="/Top" element = {<TopPage />} />
          <Route exact path="/Detail" element = {<ProductDetailPage />} />
          <Route exact path="/cart" element = {<CartPage />} />
          <Route exact path="/buypage" element = {<BuyPage />} />
          <Route exact path="/ordercompletepage" element = {<OrderCompletePage />} />
          <Route exact path="/mypage" element = {<MyPage />} />
          <Route exact path="/join" element = {<JoinPage />} />
          <Route exact path="/admin" element = {<AdminPage />} />
          <Route exact path="/edit" element = {<EditPage />} />
          <Route exact path="/ordertracking" element = {<OrderTrackingPage />} />
          <Route exact path="/productedit" element = {<ProductEditPage />} />
          <Route exact path="/productpost" element = {<ProductPostPage />} />
          <Route exact path="/deleteorder" element = {<DeleteOrderPage />} />
          <Route exact path="/product" element = {<ProductGetPage />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
