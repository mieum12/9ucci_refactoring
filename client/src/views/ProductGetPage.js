import React from "react";
import styled from "styled-components";
import ProductGet from "../components/Admin/ProductGet";

const ProductGetPage = () => {
  return (
    <Div>
      <ProductGet></ProductGet>
    </Div>
  );
};

export default ProductGetPage;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
