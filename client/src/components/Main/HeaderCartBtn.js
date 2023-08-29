import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartBtn = (props) => {
  // const cartCtx = useContext(CartContext);
  // const { items } = cartCtx;

  // const cartItemNum = items.reduce((currentNum, item) => {
  //   return currentNum + item.amount;
  // });
  return (
    <button onClick={props.onClick}>
      <div>CART</div>
      {/* <div>{cartItemNum}</div> */}
    </button>
  );
};

export default HeaderCartBtn;
