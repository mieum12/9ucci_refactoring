import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import TopPage from "./components/views/ProductPage/TopPage";
import ProductDetailPage from "./components/views/ProductPage/ProductDetailPage";
import CartPage from "./components/views/CartPage/CartPage";
import BuyPage from "./components/views/BuyPage/BuyPage";
// import OrderCompletePage from "./components/views/BuyPage/OrderCompletePage";
import JoinPage from "./components/views/JoinPage/JoinPage";
import AdminPage from "./components/views/AdminPage/AdminPage";
import MyPage from "./components/views/MyPage/MyPage";
import EditPage from "./components/views/EditPage/EditPage";
import OrderTrackingPage from "./components/views/MyPage/OrderTrackingPage";
import ProductEditPage from "./components/views/EditPage/ProductEditPage";
import ProductPostPage from "./components/views/PostPage/ProductPostPage";
import DeleteOrderPage from "./components/views/MyPage/DeleteOrderPage";
import ProductGetPage from "./components/views/PostPage/ProductGetPage";
import RootLayout from "./components/views/LandingPage/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "top", element: <TopPage /> },
      { path: "detail", element: <ProductDetailPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "buypage", element: <BuyPage /> },
      { path: "mypage", element: <MyPage /> },
      { path: "join", element: <JoinPage /> },
      { path: "admin", element: <AdminPage /> },
      { path: "edit", element: <EditPage /> },
      { path: "ordertracking", element: <OrderTrackingPage /> },
      { path: "productedit", element: <ProductEditPage /> },
      { path: "productpost", element: <ProductPostPage /> },
      { path: "deleteorder", element: <DeleteOrderPage /> },
      { path: "product", element: <ProductGetPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
