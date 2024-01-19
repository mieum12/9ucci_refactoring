import { useContext } from "react";
import ProductItemAddForm from "./ProductItemAddForm";
import CartContext from "../../store/cart-context";
import styled from "styled-components";

const ProductItem = (props) => {
  // CartContext를 useContext로 전달한다 연결을 설정하기 위햐
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toLocaleString("ko-KR")}원`;

  //ProductItemAddForm의 onAddToCart함수를 실행하면 이곳까지 들어와 컨텍스트에 도달하게함
  const addToCartHandler = (amount) => {
    //이제 이 곳에서 컨텍스트에서 정의된 메소드 중 하나를 호출할 수 있게된다
    //이제 이 곳에 리듀서에 전달할 항목을 객체로 만들어 보낸다
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
