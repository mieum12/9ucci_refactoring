import { useContext } from "react";
import ProductItemAddForm from "./ProductItemAddForm";
import CartContext from "../../store/cart-context";
import styled from "styled-components";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toLocaleString("ko-KR")}원`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <ProductItemContainer>
      <div>
        <img
          src="https://pbs.twimg.com/media/FCy6QQ8VIA0uToe?format=jpg&name=medium"
          alt={props.name}
          style={{ height: "100px" }}
        />
      </div>
      <div>
        {/* TODO : 이미지 경로 인식 안됨 -> 따로 로직이 필요함 */}
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <ProductItemAddForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </ProductItemContainer>
  );
};

export default ProductItem;

const ProductItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: auto;
  border-bottom: solid #ccc 1px;
`;
