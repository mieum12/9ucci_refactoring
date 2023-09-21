import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import styled from "styled-components";

const HeaderCartBtn = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState();
  // 컨텍스트 자체가 필요하기 때문에 CartContext 객체를 가져온다
  // useContext를 사용해 CartContext를 전달한다
  // 이 컨텍스트 객체를 cartCtx 상수에 저장한다
  const cartCtx = useContext(CartContext);
  //이제 useContext를 사용해 컨텍스트가 변경될 때마다 여기 컴포넌트를 다시 평가하게 된다

  //전체가 아니라 items만 의존성으로 전달할 수 있게(cartCtx.items로 접근할 수도 있지만)
  const { items } = cartCtx;

  // 카트 옆에 수량을 나타내는 변수를 만들것!
  // 데이터 배열을 값 하나로 변환해주는 reduce 사용
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    //0이 아닐때 실행되도록 카트가 0이면 그냥 반환
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);

    //class를 삭제해 빈 문자열로 돌려놔야한다, 그래야 추가 할때마다 애니메이션 효과 가능
    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    //clean up function : 이 이펙트가 실행 될 때 타이머를 지우도록, 만료되기 전에 다시 설정 가능(여러번 클릭 시 이전 타이머는 지우고 새로운 타이머를 실행해야 하니까)
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <CartBtn>
      <button onClick={props.onClick}>CART ({numberOfCartItems})</button>
    </CartBtn>
  );
};

export default HeaderCartBtn;

const CartBtn = styled.div`
  button {
    border: white solid 0px;
    background: none;
    font-size: auto;
    cursor: pointer;
    padding: 0;
  }
`;
