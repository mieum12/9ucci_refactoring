/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Detail } from "./detail";
import { Link } from "react-router-dom";

export function ProductsList() {
  const products = [
    {
      id: "p1",
      title: "셔츠",
      description: "하늘색 가을 셔츠 사고싶다",
      price: "300000",
    },
    {
      id: "p2",
      title: "니트",
      description: "까만색 깔끔한 니트도 사고싶다",
      price: "600000",
    },
  ];
  return (
    <ProductsContainer>
      <div>전체 상픔 수 (3)</div>
      <div className="products">
        <ul className="list">
          {products.map((products) => (
            <li key={products.id} className="item">
              <Link to={products.id}>
                <img src={products.image} alt={products.title} />
                <div className="content">
                  <div>{products.title}</div>
                  <div>{products.price}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </ProductsContainer>
  );
}

export default ProductsList;

const ProductsContainer = styled.div`
  .products {
    margin: 3rem auto;
  }

  .list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .item {
    list-style-type: none;
  }
  .item a {
    padding: 0rem 4rem 2rem;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  .item a:hover {
    transform: scale(1.02);
  }

  .item img {
    border-radius: 4px;
    height: 20rem;
    object-fit: cover;
  }

  .content {
    padding: 1rem;
  }
  .item h2 {
    margin: 0 0 1rem 0;
  }
`;
