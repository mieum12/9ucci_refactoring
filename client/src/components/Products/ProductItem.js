import { useContext } from "react";
import ProductItemForm from "./ProductItemForm";
import CartContext from "../../store/cart-context";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`; //소수점 두자리까지

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li>
      <div>
        <img
          src="https://pbs.twimg.com/media/FCy6QQ8VIA0uToe?format=jpg&name=medium"
          alt={props.name}
          style={{ height: "200px" }}
        />
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ProductItem;
