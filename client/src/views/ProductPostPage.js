import React from "react";
import ProductPost from "../components/Admin/ProductPost";
import styled from "styled-components";

const ProductPostPage = () => {
  return (
    <Div>
      <ProductPost></ProductPost>
    </Div>
  );
};

export default ProductPostPage;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
