import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./routes/LandingPage";
import LoginPage from "./routes/LoginPage";
import JoinPage from "./routes/JoinPage";
import AdminPage from "./routes/AdminPage";
import MyPage from "./routes/MyPage";
import EditPage from "./routes/EditPage";
import ProductEditPage from "./routes/ProductEditPage";
import ProductPostPage from "./routes/ProductPostPage";
import DeleteOrderPage from "./routes/DeleteOrderPage";
import ProductGetPage from "./routes/ProductGetPage";
import RootLayout from "./routes/RootLayout";
import ProductsPage from "./routes/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      { path: "login", element: <LoginPage /> },
      { path: "join", element: <JoinPage /> },

      { path: "mypage", element: <MyPage /> },
      { path: "admin", element: <AdminPage /> },
      { path: "products", element: <ProductsPage /> },
      // { path: "edit", element: <EditPage /> },
      // { path: "productedit", element: <ProductEditPage /> },
      // { path: "productpost", element: <ProductPostPage /> },
      // { path: "deleteorder", element: <DeleteOrderPage /> },
      // { path: "product", element: <ProductGetPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
