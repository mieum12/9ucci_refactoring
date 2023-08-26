/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Detail } from './detail';

export function ProductList(props) {

  //데이터 가져오기 (임시 data/products.json )
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios.get(":5000/products").then((data) => {
  //     setProducts(data.data.products);
  //   });
  // }, [setProducts]);

 const products = [
    {id: 1, image: "image/001.png", name: "상품이름1",  price: "11,111", factory: "제조사 : 9ucci"},
    {id: 2, image: "image/002.png", name: "상품이름2",  price: "22,222", factory: "제조사 : 9ucci"},
    {id: 3, image: "image/003.png", name: "상품이름3",  price: "33,333", factory: "제조사 : 9ucci"},
    {id: 4, image: "image/004.png", name: "상품이름4",  price: "44,444", factory: "제조사 : 9ucci"},
  ];


  return( 
  <Body>
  <Wrapper>
    <Row>
      <Col>
        <Frame>
          <Photo>
            <a href="/Detail">
              <img src={products[0].image} alt="상품이름" style={{widht:"447px", height:"535px"}}/> </a>
              </Photo>
          <Name>{products[0].name}</Name>
          <Price>{products[0].price}원</Price>
        </Frame>
      </Col>

      <Col>
        <Frame>
          <Photo>
            <a href ="/Detail">
            <img src={products[1].image} alt="상품이름" style={{widht:"447px", height:"535px"}}/>
              </a>
            </Photo>
          <Name>{products[1].name}</Name>
          <Price>{products[1].price}원</Price>
        </Frame>
      </Col>

      <Col>
        <Frame>
          <Photo>
          <a href ="/Detail">
          <img src={products[2].image} alt="상품이름" style={{widht:"447px", height:"535px"}}/>
          </a>
          </Photo>
          <Name>{products[2].name}</Name>
          <Price>{products[2].price}원</Price>
        </Frame>
      </Col>


      {/* <Col>
        <Frame>
          <Photo>
          <a href ="/">
            {products[3].image} 
          </a>
          </Photo>
          <Name>{products[3].name}</Name>
          <Price>{products[3].price}원</Price>
        </Frame>
      </Col> */}
    </Row>
  </Wrapper>
  </Body>
)
}

const Body = styled.div`
justify-center: center;
align-items : center;
width: 1653px;
height; 714px;
padding: 40px;
margin-top: 0;
margin-bottom: 0;
margin-right: auto;
margin-left: auto;
`
const Wrapper = styled.div`
overflow: scroll;
margin-top: 0px;
margin-botton: 0px;
margin-right: auto;
margin-left: auto;
max-width: 100%;
max-height: 621px;
`

const Row = styled.ul`

box-sizing: border-box;
`
const Col = styled.li`
float: left;
width: 33.333333333%;
padding: 0, 10px;
box-sizing: border-box;
`
const Frame = styled.div`
background-color: #D9D9D9;
width: 484px;
height: 621px;
padding-top:10x
padding-right: 27px;
padding-left: 27px;
margin-top: 0;
margin-bottom: -10px;
margin-right:auto;
margin-left: auto;
`
const Photo = styled.div`
margin-top: 0px;
margin-bottom: 20px;
margin-right: 20px;
margin-left: 20px;
`

const Name = styled.span`
color: #473F3F;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 30px;
text-align: center;
display: block;

`

const Price = styled.span`
color: #473F3F;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 30px;
text-align: center;
display: block;

`




 