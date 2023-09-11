import React, { useContext, useState } from "react";
import Modal from "./Modal";
import CheckOrderForm from "./CheckOrderForm";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const CartModal = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitIsDone, setSubmitIsDone] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  //장바구니에 상품이 비면 주문 버튼이 안보이도록 장바구니 확인
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    // cartCtx.addItem({ item, amount: 1 });
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  //CheckOrderForm 컴포넌트에서 전달받은 사용자 정보(userData)를 가져온 뒤 백엔드로 전송하기!!
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-510c3-default-rtdb.firebaseio.com/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setSubmitIsDone(true);
    //주문 완료 후 카트 비우기
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div>
      <button onClick={props.onClose}>Close</button>
      {hasItems && <button onClick={orderHandler}>Order</button>}
    </div>
  );

  //1. 아직 쇼핑중~ 제출 전인 상태
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <CheckOrderForm
          onConfirm={submitOrderHandler}
          onCancel={props.onClose}
        />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  //2. 제출중인 경우
  const isSubmittingModalContent = <p>주문을 접수하는 중입니다!</p>;

  //3. 주문서가 제출 완료된 경우
  const submitIsDoneModalContent = (
    //React.Fragment로 감싸는 이유는 형제 JSX를 만들기 위해 하나의 태그로 감싸주는 것
    <React.Fragment>
      <p>주문이 성공적으로 접수되었습니다!</p>
      <div>
        <button onClick={props.onClose}>Close</button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !submitIsDone && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && submitIsDone && submitIsDoneModalContent}
    </Modal>
  );
};

export default CartModal;
