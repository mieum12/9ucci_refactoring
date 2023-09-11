import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* props.input에서 얻은 키-값 쌍 {type:'text}을 스프레드 연산자는 type='text로 추가된다*/}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
