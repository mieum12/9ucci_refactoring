import React from 'react'
import { BuyPageBody } from '../../Buy/BuypageBody';
import { MyPageNav } from '../../Mypage/MypageNav';
import Header from '../../Main/MainHeader';
import styled from 'styled-components';


function BuyPage() {
  return (<Div>
    <Header/>
    <MyPageNav></MyPageNav>
		<BuyPageBody/>

  </Div>
  )
}

export default BuyPage;

const Div = styled.div `
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`