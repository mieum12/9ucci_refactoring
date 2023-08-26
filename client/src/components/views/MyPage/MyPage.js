import React from 'react';
import { MyPageNav } from '../../Mypage/MypageNav';
import Head from '../../Main/MainHeader';
import styled from 'styled-components';
import MyPageBody from '../../Mypage/MypageBody';

const MyPage = () => {
    return (
        <Div>
          <Head></Head>
          <MyPageNav></MyPageNav>
          <MyPageBody></MyPageBody>
        </Div>
    )
}

export default MyPage;

const Div = styled.div `
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`