import React from 'react'
import Header from '../../Main/MainHeader';
import { MyPageNav } from '../../Mypage/MypageNav';
import { CartTable } from '../../Cart/CartTable';
import {CartButtons} from '../../Cart/CartButtons';
import styled from 'styled-components';

function CartPage() {
  return (
    <Div>
      <Header/>
      <MyPageNav />
      <CartTable/>
      <CartButtons/>
      
    </Div>
  )
}

export default CartPage;


const Div = styled.div `
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`