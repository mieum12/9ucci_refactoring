import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../Main/Header";
import CartProvider from "../../store/CartProvider";
import { useState } from "react";
import Cart from "../Cart/Cart";

export default function RootLayout() {
  // cart버튼 누르면 모달이 열리게 설계
  // 카트 버튼 상태관리
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Root>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}

        <Header onShowCart={showCartHandler} />
        <main className="main-container">
          <Outlet />
        </main>
      </CartProvider>
    </Root>
  );
}

const Root = styled.div`
  .main-container {
    text-align: center;
  }
`;
