import "./App.css";
import React, {useEffect, useState} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./routes/LandingPage";
import LoginPage from "./routes/LoginPage";
import JoinPage from "./routes/JoinPage";
import MyPage from "./routes/MyPage";
import RootLayout from "./routes/RootLayout";
import ShopPage from "./routes/ShopPage";
import {auth} from "./firebase";
import LoadingScreen from "./components/LoadingScreen";
import styled from "styled-components";

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

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const init = async ()=>{
    // firebase가 로그인 여부나 유저가 누구인지 확인할 떄까지 기다리는 부분
    await auth.authStateReady()
    // firebase가 로딩이 완료되면
    setIsLoading(false)

  }

  useEffect(()=>{
    init()
  },[])
  return <Wrapper>
    {isLoading ? <LoadingScreen/> : <RouterProvider router={router}/>}
  </Wrapper>
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`