import Modal from "./Modal";

const CartModal = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "cart-test-1", amount: 2, price: "30000" }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div>카트 모달!!</div>
      {cartItems}
      <div> Total Amount</div>
      <div>전제 금액</div>
      <div>
        <button onClick={props.onClose}>close</button>
        <button>order</button>
      </div>
    </Modal>
  );
};

export default CartModal;
