import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

export const Product = ({products}) => {
    return(
        <>
        <Frame>
            <Photo>
            <Link to ="#">
                {products.image} 
            </Link>
            </Photo>
            <Text>{products.name}</Text>
            <Text>{products.price}원</Text>
        </Frame>
        </>
    )
}

const Photo = styled.div`
  width: 447px;
  height: 535px;

  `

const Text = styled.span`
  color: #473F3F;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  
`
const Frame = styled.media`
    max-width: 968px) 
    width: 220px;
    height: 220px;
    `
   
  