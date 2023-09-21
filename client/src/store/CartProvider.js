import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//✅ CartProvider 외부에 cartReducer 추가하기: 리듀서 함수는 컴포넌트에서 아무것도 필요로하지 않기때문에, 컴포넌트가 재평가될때마다 재생성되어서는 안되기때문이기도
// 장바구니 reducer추가하기(좀더 복잡한 상태관리를 위해 = 중복되는게 있는지, 삭제하기 등)
const cartReducer = (state, action) => {
  // state는 리듀서에 의해 관리되는 state의 최신 버전, 그리고 이 리듀서 함수에서는 새로운 state를 반환하면 된다!
  //여기서는 먼저 defaultCartState를 만들어 반환한다

  //1.카트에 아이템 추가
  if (action.type === "ADD") {
    // 전체 상품의 수량
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
      updatedItems = [...state.items];
      //기존 존재하는 항목을 updatedItem로 덮어쓰기
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //1-2.중복된 아이템이 없고 새로운 아이템을 추가하는 경우 (배열에 새 항목을 추가하는 concat 사용,기존 배열의 편집이 아닌 새로운 배열을 반환)
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  //2.카트 아이템 삭제
  if (action.type === "REMOVE") {
    //기존의 아이템 찾기
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    //1보다 작으면 삭제하고 1 보다 크면 계속 카트에 두고 수량만 줄이고싶다
    if (existingItem.amount === 1) {
      //그대로 둘 상품
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items]; //일단 기존의 항목을 가져온다
      updatedItems[existingCartItemIndex] = updatedItem; //기존 항목이 들어있는 새 배열을 만든다
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  //3. 카트 전체 비우기
  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

//✅ cart-context의 데이터를 관리하고, 접근하려는 모든 컴포넌트에 그 데이터를 제공하는 역할을 한다
const CartProvider = (props) => {
  // useReducer를 사용해 cartReducer를 point해준다(실행x) 그러면 리액트가 실행해준다, 초기값은 defaultCartState
  // useReducer의 두번째 인자인 dispatchCartAction는 리듀서에 액션을 전달, 디스패치해주는 함수이다
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  //리듀서 함수 내부에서 ADD 타입의 액션을 전달하는 함수
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
    //리듀서 함수에 항목을 추가하기 위해 액션의 일부로 항목을 전달 = 두번째 속성으로 item전달
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  // 계속 업데이트가 될 구체적인 컨텍스트 값
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {/* 이렇게해서 모든 컴포넌트들을 <CartContext.Provider>로 감쌀 수 있다 */}
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
