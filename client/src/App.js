import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./views/LandingPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import JoinPage from "./views/JoinPage";
import AdminPage from "./views/AdminPage";
import MyPage from "./views/MyPage";
import EditPage from "./views/EditPage";
import ProductEditPage from "./views/ProductEditPage";
import ProductPostPage from "./views/ProductPostPage";
import DeleteOrderPage from "./views/DeleteOrderPage";
import ProductGetPage from "./views/ProductGetPage";
import RootLayout from "./views/RootLayout";
import ProductsPage from "./views/ProductsPage";

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
