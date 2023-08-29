import { useReducer } from "react";
import CardContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  //1.카트에 아이템 추가
  if (action.type === "ADD") {
    // (전체 상품의 수량)
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // 이미 있는 상품인지 찾아서 인덱스 찾아놓기
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // 그 인덱스를 갖는 아이템을 변수로 지정한다
    // existingCartItem가 있는 경우 작동하게 되고 없으면 그냥 null로 끝
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    // 1-1.이미 중복된 아이템이 있는 경우
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem, //기존의 아이템
        amount: existingCartItem.amount + action.item.amount, //수량만 추가
      };
      // 기존 존재하는 아이템을 updatedItem으로 덮기
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // 1-2.중복된 아이템이 없고 새로운 아이템을 추가하는 경우
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  //2.카트 아이템 삭제
  if (action.type === "REMOVE") {
  }

  //3.카트를 전체 비울때
  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

// cart-context의 데이터를 관리하고
// 접근하려는 모든 컴포넌트에 그 데이터를 제공하는 역할을 한다
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CardContext.Provider value={cartContext}>
      {/* 이렇게해서 모든 컴포넌트들을 <CardContext.Provider>로 감쌀 수 있다 */}
      {props.children}
    </CardContext.Provider>
  );
};

export default CartProvider;
