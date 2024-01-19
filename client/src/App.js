import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./routes/LandingPage";
import LoginPage from "./routes/LoginPage";
import JoinPage from "./routes/JoinPage";
import MyPage from "./routes/MyPage";
import RootLayout from "./routes/RootLayout";
import ShopPage from "./routes/ShopPage";

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
      { path: 'shop', element: <ShopPage/>}

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
