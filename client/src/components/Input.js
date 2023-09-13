import React from "react";
import styled from "styled-components";

const Input = React.forwardRef((props, ref) => {
  return (
    <InputContainer>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* props.input에서 얻은 키-값 쌍 {type:'text}을 스프레드 연산자는 type='text로 추가된다*/}
      <input ref={ref} {...props.input} />
      <div>개</div>
    </InputContainer>
  );
});

export default Input;

const InputContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;
