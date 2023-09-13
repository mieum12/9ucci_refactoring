import { useRef, useState } from "react";
import Input from "../Input";
import styled from "styled-components";

const ProductItemAddForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // ref에 저장된 값을 가져옴(문자열->숫자)
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    //공백을 지우고, 값이 없다면 등등 유효선 검ㅁ사
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <ProductsFormContainer>
      <form className="form" onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="수량"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "100",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ CART</button>
        {!amountIsValid && <p>1~10개의 상품 가능!</p>}
      </form>
    </ProductsFormContainer>
  );
};

export default ProductItemAddForm;

const ProductsFormContainer = styled.div`
  .form {
    text-align: right;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: 2px solid;
    padding: 5px 15px;
    border-radius: 25px;
    margin-top: 10px;
  }

  button:hover,
  button:active {
    background-color: black;
    border-color: black;
    color: white;
  }
`;
