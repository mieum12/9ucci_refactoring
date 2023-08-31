import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import styled from "styled-components";

const HeaderCartBtn = (props) => {
  // const cartCtx = useContext(CartContext);
  // const { items } = cartCtx;

  // const cartItemNum = items.reduce((currentNum, item) => {
  //   return currentNum + item.amount;
  // });
  return (
    <CartBtn>
      <button onClick={props.onClick}>
        <h3>CART (3)</h3>
      </button>
    </CartBtn>
  );
};

export default HeaderCartBtn;

const CartBtn = styled.div`
  button {
    border: white solid 0px;
    background: none;
    font-family: "Nanum Myeongjo";
    font-size: 20px;
    cursor: pointer;
    padding: 0;
  }
`;
