import styled from "styled-components";

export default function CartItem (props) {
  const price = `${props.price.toLocaleString("ko-KR")}원`;

  return (
    <CartItemContainer>
      <div>
        <h4>{props.name}</h4>
        <div className="sum">
          <span>{price}</span>
          <span className="amount">x {props.amount}개</span>
        </div>
      </div>
      <div>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ccc;
  padding: 15px 0;
  margin: 15px 10px;

  .amount {
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 5px;
    margin-left: 5px;
    border-radius: 6px;
  }

  button {
    font: inherit;
    font-weight: bold;
    border: 1px solid;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;
  }

  button:hover,
  button:active {
    background-color: black;
    color: white;
  }
`;
