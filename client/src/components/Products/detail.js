import React from "react";
import styled from 'styled-components';



export function Detail() {

//상세페이지 임시 데이터 
const products = [
  {id: 1, image: "image/001.png", name: "상품이름1",  price: "11,111", factory: "제조사 : 9ucci"},
  {id: 2, image: "image/002.png", name: "상품이름2",  price: "22,222", factory: "제조사 : 9ucci"},
  {id: 3, image: "image/003.png", name: "상품이름3",  price: "33,333", factory: "제조사 : 9ucci"},
  {id: 4, image: "image/004.png", name: "상품이름4",  price: "44,444", factory: "제조사 : 9ucci"},
];

const handleClick  =(e)=>{
  window.location.replace("/cart")
}

  return (
  <>
    <Body>
    <Wrapper>
        <ProductImage>
        <img src={products[0].image} alt="상품이름" style={{widht:"447px", height:"535px"}}/></ProductImage>
        <Productname> {products[0].name} </Productname>
        <Price>{products[0].price}원</Price>
        <Text>{products[0].factory}</Text>
        <Text> 빳빳하고 무거운 레더 소재가 아닌 유연한 고퀄리티 원단을 사용하여 퀄리티 높게 완성된 점퍼입니다. </Text>
        <CartBtn onClick={handleClick}>Cart</CartBtn>
    </Wrapper>
    </Body>
  </>
  );
}  

const Body= styled.div`
display: flex;
justify-center: center;
align-items : center;
overflow : scroll;
width: 1653px;
height; 714px;
padding: 70px;
margin-top: 0;
margin-bottom: 0;
margin-right: auto;
margin-left: auto;
`

const Wrapper = styled.div`

  width: 852px;
  height: 554px; 
  font-color: #473f3f;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  `

const Text = styled.p`
  color: #473f3f;
  font-weight: 700;
  font-size: 20px;
`

const ProductImage = styled.image`
  max-width: 414px; 
  max-height: 554px;
  margin-right: 75px;
  float: left;
  overflow : hide;
`

const Productname = styled.h2`
  margin-top: 20px;
  margin-bottom:20px;
  color: #472f2f;
  font-size : 32px;
`

const Price = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
    color: #473f3f;
    font-weight: 700;
    font-size: 20px;
  `


const CartBtn = styled.button`
    border: none;
    background-color: #d9d9d9;
    color: black;
    width: 150px;
    height: 56px; 
    font-size : 25px;
    font-weight: 700;
  `

// div {
//     font-family: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont,
//       'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
//       sans-serif;
//   }

