import { useRef, useState } from "react";
import Input from "../Input";
import styled from "styled-components";

const ProductItemAddForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  // [이벤트 객체를 얻을 submitHandler]
  const submitHandler = (event) => {
    event.preventDefault(); //페이지를 다시 로드하지 않게

    // ->ref에 저장된 값을 가져옴
    // useRef로 생성된 ref에 대해서는 항상 .current.value를 써야함
    // amountInputRef.current는 ref에 저장된 인풋 요소를 가리킴
    // 모든 인풋 요소는 기본적으로 value속성을 가짐 = 현재입력된 값을 갖고있는 곳 =문자열
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; //문자열->숫자

    //공백을 지우고, 값이 없다면 등등 유효성 검사
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      // 위에서 설정한 조건이 유효하지 않은 값이라면 submitHandler 함수를 더이상 실행시키지 않고 반환, 그리고 오류 메세지 반환
      setAmountIsValid(false); //유효하지않음!으로 바꿔줌
      return;
    }

    // 추가하려는 아이템은 입력 수량 외에도 더 많은 데이터 필요, 그래서 여기서 context메소드를 호출하지 않고 프롭으로 얻어올 다른 함수 호출, 여기서 입력되고 검증된 수량을 이 onAddToCart함수에 전달
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <ProductsFormContainer>
      {/* 폼이 제출되면 장바구니에 해당 항목을 추가하는 것 */}
      <form className="form" onSubmit={submitHandler}>
        <Input
          // 사용자 지정 컴포넌트에서 ref 프롭을 바로 사용하기(원래는 안돰), ref를 받고싶은 컴포넌트(Input컴포넌트)로 가서 컴포넌트 함수를 React.forwardRef로 감싸고 매개변수 추가. 그러면 Input 컴포넌트는 forwardRef의 인수가 되는 것이고, 그럼 ref를 얻을 수 있다(ref prop을 통해 컴포넌트에 설정할 수 있다)
          // 결국 ref를 통해 input에 접근할 수 있다 =submitHandler에 입력된 값을 읽을수있다
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
        {/* 유효하지않은 값 에러메세지 출력 */}
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
