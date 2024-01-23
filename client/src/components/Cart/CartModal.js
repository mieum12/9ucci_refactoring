import React, { useContext, useState } from "react";
import Modal from "./Modal";
import CheckOrderForm from "./CheckOrderForm";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import styled from "styled-components";
import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "../../firebase";

export default function CartModal(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitIsDone, setSubmitIsDone] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toLocaleString("ko-KR")}원`;

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

    // await fetch(
    //   "https://ucci-de185-default-rtdb.firebaseio.com/order.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       user: userData,
    //       orderedItems: cartCtx.items,
    //     }),
    //   }
    // );


    try {
      setIsSubmitting(true);

      // 데이터베이스에 주문 내역 보내서 저장하기
      await addDoc(collection(db, 'order'), {
        // 사용자 정보
        userInfo: userData,
        userId: auth.currentUser.uid,
        // 상품 정보
        orderedItems: cartCtx.items,
        totalAmount,
        createdAt: Date.now(),
      })
    } catch (e) {
      console.log(e)
    }finally {
      setIsSubmitting(false);
      setSubmitIsDone(true);
      //주문 완료 후 카트 비우기
      cartCtx.clearCart();
    }
  };

  const cartItems = (
    <div>
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
    </div>
  );

  const modalActions = (
    <ModalBtn>
      <button onClick={props.onClose}>Close</button>
      {hasItems && <button onClick={orderHandler}>Order</button>}
    </ModalBtn>
  );

  //1. 아직 쇼핑중~ 제출 전인 상태
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <Total>
        <span>총 결제 금액 :</span>
        <span>{totalAmount}</span>
      </Total>
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
  const isSubmittingModalContent = (
    <IsSubmittingContainer>
      <p>주문을 접수하는 중입니다!</p>
    </IsSubmittingContainer>
  );

  //3. 주문서가 제출 완료된 경우
  const submitIsDoneModalContent = (
    //React.Fragment로 감싸는 이유는 형제 JSX를 만들기 위해 하나의 태그로 감싸주는 것
    <React.Fragment>
      <SubmitDoneContainer>
        <p>✅ 주문이 성공적으로 접수되었습니다!</p>
        <div>
          <button onClick={props.onClose}>Close</button>
        </div>
      </SubmitDoneContainer>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      My Cart 🛒
      {!isSubmitting && !submitIsDone && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && submitIsDone && submitIsDoneModalContent}
    </Modal>
  );
};

const Total = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  font-weight: bold;
  margin: 20px 10px;
`;

const ModalBtn = styled.div`
  button {
    background-color: #1c6085;
    color: white;
    font-weight: 600;
    border: 0;
    font-size: 12px;
    padding: 5px 10px;
    margin: 10px;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
    &:hover,
    &:active {
      opacity: 0.8;
    }
  }
`;
const IsSubmittingContainer = styled.div`
  text-align: center;
  padding: 100px;
`;
const SubmitDoneContainer = styled.div`
  text-align: center;
  padding: 100px;

  button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid;
    padding: 10px 30px;
    border-radius: 25px;
    margin-left: 10px;
  }

  button:hover,
  button:active {
    background-color: black;
    border-color: black;
    color: white;
  }
`;
