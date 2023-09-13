import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import styled from "styled-components";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-cart-88b00-default-rtdb.firebaseio.com/products.json"
      );

      if (!response.ok) {
        throw new Error("오류가 발생했습니다!!!");
      }

      const responseData = await response.json();

      const loadProducts = [];

      //key는 우리가 가져오는 id
      for (const key in responseData) {
        loadProducts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setProducts(loadProducts);
      setIsLoading(false);
    };

    //fetchProducts는 async function이고 항상 promise를 반환한다
    //그래서 promise 대신 오류를 가져오는 경우 그 오류로 인해 해당 promise가 가부하게 된다 -> 그래서 try catch로 에러를 잡을 수 없다

    //promise 내부의 error 다루는 방법
    fetchProducts()
      .then()
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1> Loading...</h1>
        <div>상품 리스트를 가져오는 중입니다</div>
      </div>
    );
  }

  if (httpError) {
    return (
      <div>
        <h1>{httpError}</h1>
      </div>
    );
  }

  const productsList = products.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));
  return (
    <ProductsContainer>
      <div className="pro-list">{productsList}</div>
    </ProductsContainer>
  );
};
export default ProductsList;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;

  .pro-list {
    width: 550px;
    display: flex;
    flex-direction: column;
    align-content: center;
    // justify-content: center;
    // align-items: center;
  }
`;
