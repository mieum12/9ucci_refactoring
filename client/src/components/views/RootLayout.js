import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import Header from "../Main/Header";
import CartProvider from "../../store/CartProvider";
import { useState } from "react";
import CartModal from "../Cart/CartModal";
import Footer from "../Footer";

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
        {cartIsShown && <CartModal onClose={hideCartHandler} />}
        <header className="title">
          <NavLink to="/">
            <h1>9UCCI</h1>
          </NavLink>
        </header>
        <Header onShowCart={showCartHandler} />
        <main className="main-container">
          <Outlet />
        </main>
      </CartProvider>
      <Footer />
    </Root>
  );
}

const Root = styled.div`
  header {
    display: flex;
    justify-content: center;
    background-size: cover;
  }
  h1 {
    display: flex;
    justify-content: center;
    margin: 20px;
    width: 300px;
    font-family: "Nanum Myeongjo";
    font-size: 50px;
  }
  .main-container {
    text-align: center;
  }
  .title a {
    color: black;
    text-decoration: none;
  }
`;
