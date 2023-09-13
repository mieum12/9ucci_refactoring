import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./components/views/LandingPage";
import LoginPage from "./components/views/LoginPage";
import RegisterPage from "./components/views/RegisterPage";
import JoinPage from "./components/views/JoinPage";
import AdminPage from "./components/views/AdminPage";
import MyPage from "./components/views/MyPage";
import EditPage from "./components/views/EditPage";
import ProductEditPage from "./components/views/ProductEditPage";
import ProductPostPage from "./components/views/ProductPostPage";
import DeleteOrderPage from "./components/views/DeleteOrderPage";
import ProductGetPage from "./components/views/ProductGetPage";
import RootLayout from "./components/views/RootLayout";
import ProductsPage from "./components/views/ProductsPage";

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
      { path: "products", element: <ProductsPage /> },
      { path: "mypage", element: <MyPage /> },
      { path: "join", element: <JoinPage /> },
      { path: "admin", element: <AdminPage /> },
      { path: "edit", element: <EditPage /> },
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
